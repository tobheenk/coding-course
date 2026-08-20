/* ============================================================
   PDF EXPORT — builds a clean PDF of a worksheet submission using
   jsPDF (loaded from CDN in each unit page), triggers a local
   download, AND (if Apps Script is configured) uploads it to the
   teacher's Google Drive with the filename:
     {Student Display Name}_{worksheetId}.pdf
     e.g. "Budi Santoso_u1ws01.pdf"
   ============================================================ */

function pdfExport_buildAndSubmit(opts) {
  // opts: { studentName, wsId, unitTitle, partTitle, instructions,
  //         fields: [{label, value}], rubric: [{criterion, points, selection, earned}],
  //         score, maxScore }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = 56;

  function ensureRoom(h) {
    if (y + h > 780) { doc.addPage(); y = 56; }
  }
  function heading(text, size, color) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(text, margin, y);
    y += size * 0.9;
  }
  function bodyText(text, size) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size || 10.5);
    doc.setTextColor(30, 30, 30);
    const lines = doc.splitTextToSize(text || "(no answer provided)", pageW - margin * 2);
    ensureRoom(lines.length * (size ? size * 1.3 : 14) + 6);
    doc.text(lines, margin, y);
    y += lines.length * (size ? size * 1.3 : 14) + 8;
  }
  function rule() {
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, y, pageW - margin, y);
    y += 14;
  }

  // Header
  heading("Grade 7 Coding — Worksheet Submission", 15, [30, 39, 97]);
  y += 2;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(90, 90, 90);
  doc.text(`${opts.unitTitle}  •  ${opts.partTitle}`, margin, y);
  y += 16;
  doc.text(`Worksheet ID: ${opts.wsId}`, margin, y);
  y += 14;
  doc.text(`Student: ${opts.studentName}`, margin, y);
  y += 14;
  doc.text(`Submitted: ${new Date().toLocaleString()}`, margin, y);
  y += 18;
  rule();

  // Instructions
  if (opts.instructions) {
    heading("Instructions", 11, [30, 39, 97]);
    bodyText(opts.instructions, 10);
    y += 4;
  }

  // Fields / answers
  heading("Student Answers", 12, [30, 39, 97]);
  y += 4;
  (opts.fields || []).forEach((f) => {
    ensureRoom(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(20, 20, 20);
    doc.text(f.label, margin, y);
    y += 14;
    bodyText(f.value, 10);
  });

  y += 4;
  rule();

  // Rubric
  heading("Rubric — Student Self-Assessment", 12, [30, 39, 97]);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text("This score is a self-assessment completed by the student, not an official teacher grade.", margin, y);
  y += 18;

  (opts.rubric || []).forEach((r) => {
    ensureRoom(18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    const line = `${r.criterion}`;
    const lines = doc.splitTextToSize(line, pageW - margin * 2 - 160);
    doc.text(lines, margin, y);
    doc.setFont("helvetica", "bold");
    doc.text(`${r.selection}  (${r.earned}/${r.points} pts)`, pageW - margin - 150, y);
    y += Math.max(lines.length * 13, 16);
  });

  y += 10;
  ensureRoom(30);
  doc.setFillColor(20, 23, 31);
  doc.rect(margin, y, pageW - margin * 2, 34, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text(`Self-Assessed Score: ${opts.score} / ${opts.maxScore}`, margin + 14, y + 22);
  y += 50;

  const filename = `${opts.studentName}_${opts.wsId}.pdf`;

  // 1) Always trigger a local download so the student/teacher has a copy regardless of Apps Script.
  doc.save(filename);

  // 2) Best-effort upload to the teacher's Google Drive via Apps Script.
  const base64 = doc.output("datauristring").split(",")[1];
  return progress_syncToServer({
    action: "save_worksheet_pdf",
    username: opts.username,
    studentName: opts.studentName,
    wsId: opts.wsId,
    unit: opts.unitNum,
    filename,
    pdfBase64: base64,
    score: opts.score,
    maxScore: opts.maxScore,
    timestamp: new Date().toISOString(),
  });
}
