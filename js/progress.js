/* ============================================================
   PROGRESS — local (per-device) cache of what a student has done,
   plus a best-effort sync to the teacher's Google Sheet via
   Apps Script (see appscript-config.js + appscript/Code.gs).

   Local cache makes the student experience instant and fully
   usable even before Apps Script is configured. The Apps Script
   sync is what lets the TEACHER see progress from a different
   device — it is the real source of truth for the dashboard.
   ============================================================ */

function progress_key(username) {
  return "g7c_progress_" + username;
}

function progress_load(username) {
  try {
    return JSON.parse(localStorage.getItem(progress_key(username)) || "{}");
  } catch (e) {
    return {};
  }
}

function progress_save(username, data) {
  localStorage.setItem(progress_key(username), JSON.stringify(data));
}

function progress_markComplete(username, unitNum, partNum, isComplete, displayName) {
  const data = progress_load(username);
  const uKey = "unit" + unitNum;
  if (!data[uKey]) data[uKey] = { completedParts: [], worksheets: {} };
  const set = new Set(data[uKey].completedParts || []);
  if (isComplete) set.add(partNum); else set.delete(partNum);
  data[uKey].completedParts = Array.from(set).sort((a, b) => a - b);
  progress_save(username, data);

  // Best-effort sync (non-worksheet parts still get logged for the dashboard)
  progress_syncToServer({
    action: "part_complete",
    username,
    studentName: displayName || username,
    unit: unitNum,
    part: partNum,
    complete: isComplete,
    timestamp: new Date().toISOString(),
  });

  return data[uKey].completedParts;
}

function progress_isComplete(username, unitNum, partNum) {
  const data = progress_load(username);
  const uKey = "unit" + unitNum;
  return !!(data[uKey] && data[uKey].completedParts && data[uKey].completedParts.includes(partNum));
}

function progress_getUnitStats(username, unitNum, totalParts) {
  const data = progress_load(username);
  const uKey = "unit" + unitNum;
  const completed = (data[uKey] && data[uKey].completedParts) ? data[uKey].completedParts.length : 0;
  return { completed, total: totalParts, pct: totalParts ? Math.round((completed / totalParts) * 100) : 0 };
}

function progress_getOverallStats(username, unitsMeta) {
  // unitsMeta: [{ num: 1, totalParts: 8 }, ...]
  let completed = 0, total = 0;
  unitsMeta.forEach((u) => {
    const s = progress_getUnitStats(username, u.num, u.totalParts);
    completed += s.completed;
    total += s.total;
  });
  return { completed, total, pct: total ? Math.round((completed / total) * 100) : 0 };
}

// ---------- Sequential unlocking ----------

function progress_isUnitComplete(username, unitNum, totalParts) {
  const stats = progress_getUnitStats(username, unitNum, totalParts);
  return stats.completed >= stats.total && stats.total > 0;
}

// A unit is unlocked if it's Unit 1, OR every unit before it (by order in
// unitsMeta) is fully complete. unitsMeta should be sorted by `num` ascending.
function progress_isUnitUnlocked(username, unitNum, unitsMeta) {
  const idx = unitsMeta.findIndex((u) => u.num === unitNum);
  if (idx <= 0) return true; // first unit (or unknown unit) is always unlocked
  for (let i = 0; i < idx; i++) {
    if (!progress_isUnitComplete(username, unitsMeta[i].num, unitsMeta[i].totalParts)) return false;
  }
  return true;
}

// Within a unit, a part is unlocked if it's Part 1, or the immediately
// preceding part has been completed. (Parts must be finished in order.)
function progress_isPartUnlocked(username, unitNum, partNum) {
  if (partNum <= 1) return true;
  return progress_isComplete(username, unitNum, partNum - 1);
}

// Finds the first incomplete part across the WHOLE course (used by the
// "Continue Learning" button on the student dashboard). Returns
// { unitNum, partNum, file } or null if everything is complete.
function progress_getNextIncompletePartGlobal(username, unitsMeta) {
  for (const u of unitsMeta) {
    if (!progress_isUnitUnlocked(username, u.num, unitsMeta)) {
      return { unitNum: u.num, partNum: 1, file: u.file }; // shouldn't normally happen before it's unlocked
    }
    for (let p = 1; p <= u.totalParts; p++) {
      if (!progress_isComplete(username, u.num, p)) {
        return { unitNum: u.num, partNum: p, file: u.file };
      }
    }
  }
  return null; // whole course complete!
}

function progress_saveWorksheetDraft(username, wsId, answers) {
  const data = progress_load(username);
  const unitNum = wsId.match(/^u(\d+)/)[1];
  const uKey = "unit" + unitNum;
  if (!data[uKey]) data[uKey] = { completedParts: [], worksheets: {} };
  if (!data[uKey].worksheets[wsId]) data[uKey].worksheets[wsId] = {};
  data[uKey].worksheets[wsId].answers = answers;
  data[uKey].worksheets[wsId].savedAt = new Date().toISOString();
  progress_save(username, data);
}

function progress_getWorksheet(username, wsId) {
  const data = progress_load(username);
  const unitNum = wsId.match(/^u(\d+)/)[1];
  const uKey = "unit" + unitNum;
  return (data[uKey] && data[uKey].worksheets && data[uKey].worksheets[wsId]) || null;
}

function progress_recordWorksheetSubmission(username, wsId, payload) {
  // payload: { answers, rubricSelections, score, maxScore }
  const data = progress_load(username);
  const unitNum = wsId.match(/^u(\d+)/)[1];
  const uKey = "unit" + unitNum;
  if (!data[uKey]) data[uKey] = { completedParts: [], worksheets: {} };
  data[uKey].worksheets[wsId] = {
    ...data[uKey].worksheets[wsId],
    answers: payload.answers,
    rubricSelections: payload.rubricSelections,
    score: payload.score,
    maxScore: payload.maxScore,
    submittedAt: new Date().toISOString(),
  };
  progress_save(username, data);
}

// ---------- Best-effort sync to Apps Script ----------
function progress_syncToServer(payload) {
  if (typeof APPSCRIPT_URL === "undefined" || !APPSCRIPT_URL || APPSCRIPT_URL.indexOf("PASTE_YOUR") !== -1) {
    console.info("[progress] Apps Script not configured yet — skipping server sync.", payload);
    return Promise.resolve({ skipped: true });
  }
  return fetch(APPSCRIPT_URL, {
    method: "POST",
    mode: "no-cors", // Apps Script web apps commonly require no-cors from static pages
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.warn("[progress] Sync failed (student can keep working offline):", err);
    return { error: true };
  });
}
