/* ============================================================
   GRADE 7 CODING — APPS SCRIPT BACKEND
   ============================================================
   What this does:
   1. Receives worksheet PDF submissions from the course website
      and saves them into a Google Drive folder you choose, named
      "StudentName_wsId.pdf" (e.g. "Budi Santoso_u1ws01.pdf").
   2. Logs every worksheet submission (with score) into a
      "Submissions" sheet tab.
   3. Logs every "part marked complete" action into a "PartLog"
      sheet tab, so the Teacher Dashboard can show progress even
      for parts that don't end in a worksheet-only completion.
   4. Serves that log back to the Teacher Dashboard as JSON.

   SETUP: see SETUP_INSTRUCTIONS.md in this same folder for the
   full step-by-step. In short:
     1. Create a Google Sheet, copy its ID into SHEET_ID below.
     2. Create (or choose) a Google Drive folder for PDFs, copy
        its ID into FOLDER_ID below.
     3. Paste this whole file into Extensions > Apps Script in
        that Sheet, replacing any starter code.
     4. Deploy > New deployment > Web app.
        - Execute as: Me
        - Who has access: Anyone
     5. Copy the resulting Web App URL into js/appscript-config.js
   ============================================================ */

const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const FOLDER_ID = "PASTE_YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE";

const SUBMISSIONS_TAB = "Submissions";
const PARTLOG_TAB = "PartLog";

function getSheet_(tabName, headers) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    sheet = ss.insertSheet(tabName);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (payload.action === "save_worksheet_pdf") {
      return handleSavePdf_(payload);
    }
    if (payload.action === "part_complete") {
      return handlePartComplete_(payload);
    }

    return jsonResponse_({ ok: false, error: "Unknown action" });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  const action = e.parameter.action;
  if (action === "get_log") {
    return jsonResponse_(getLog_());
  }
  return jsonResponse_({ ok: true, message: "Grade 7 Coding Apps Script is running." });
}

function handleSavePdf_(payload) {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const bytes = Utilities.base64Decode(payload.pdfBase64);
  const blob = Utilities.newBlob(bytes, "application/pdf", payload.filename);
  const file = folder.createFile(blob);
  const driveUrl = file.getUrl();

  const sheet = getSheet_(SUBMISSIONS_TAB, [
    "Timestamp", "Username", "Student Name", "Unit", "Worksheet ID", "Score", "Max Score", "Filename", "Drive URL",
  ]);
  sheet.appendRow([
    payload.timestamp || new Date().toISOString(),
    payload.username || "",
    payload.studentName || "",
    payload.unit || "",
    payload.wsId || "",
    payload.score != null ? payload.score : "",
    payload.maxScore != null ? payload.maxScore : "",
    payload.filename || "",
    driveUrl,
  ]);

  return jsonResponse_({ ok: true, driveUrl });
}

function handlePartComplete_(payload) {
  const sheet = getSheet_(PARTLOG_TAB, [
    "Timestamp", "Username", "Student Name", "Unit", "Part", "Complete",
  ]);
  sheet.appendRow([
    payload.timestamp || new Date().toISOString(),
    payload.username || "",
    payload.studentName || "",
    payload.unit || "",
    payload.part || "",
    payload.complete ? "TRUE" : "FALSE",
  ]);
  return jsonResponse_({ ok: true });
}

function getLog_() {
  const subSheet = getSheet_(SUBMISSIONS_TAB, [
    "Timestamp", "Username", "Student Name", "Unit", "Worksheet ID", "Score", "Max Score", "Filename", "Drive URL",
  ]);
  const partSheet = getSheet_(PARTLOG_TAB, [
    "Timestamp", "Username", "Student Name", "Unit", "Part", "Complete",
  ]);

  const submissions = sheetToObjects_(subSheet).map((r) => ({
    timestamp: r["Timestamp"], username: r["Username"], studentName: r["Student Name"],
    unit: r["Unit"], wsId: r["Worksheet ID"], score: r["Score"], maxScore: r["Max Score"],
    filename: r["Filename"], driveUrl: r["Drive URL"],
  }));

  const partLogs = sheetToObjects_(partSheet).map((r) => ({
    timestamp: r["Timestamp"], username: r["Username"], studentName: r["Student Name"],
    unit: r["Unit"], part: r["Part"], complete: String(r["Complete"]).toUpperCase() === "TRUE",
  }));

  return { ok: true, submissions, partLogs };
}

function sheetToObjects_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1).map((row) => {
    const obj = {};
    headers.forEach((h, i) => (obj[h] = row[i]));
    return obj;
  });
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
