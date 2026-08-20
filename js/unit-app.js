/* ============================================================
   UNIT APP — renders UNIT_DATA (loaded from data/unitN-data.js)
   into the sidebar + content area, handles worksheets, rubric
   scoring, PDF submission, and progress tracking.
   ============================================================ */

let SESSION = null;
let CURRENT_PART = 1;
let SAVE_TIMER = null;

function boot() {
  SESSION = auth_requireStudent();
  if (!SESSION) return;

  document.body.setAttribute("data-unit", String(UNIT_DATA.num));
  document.getElementById("who-name").textContent = SESSION.displayName;

  if (typeof UNITS_META !== "undefined" && !progress_isUnitUnlocked(SESSION.username, UNIT_DATA.num, UNITS_META)) {
    renderUnitLockedScreen();
    document.getElementById("logout-btn").addEventListener("click", auth_logout);
    return;
  }

  renderSidebarHead();
  renderPartList();

  const hashPart = parseInt((location.hash.match(/part=(\d+)/) || [])[1], 10);
  const requestedIsValid = hashPart && UNIT_DATA.parts.find((p) => p.num === hashPart) && progress_isPartUnlocked(SESSION.username, UNIT_DATA.num, hashPart);
  const startPart = requestedIsValid ? hashPart : firstIncompletePart();
  goToPart(startPart);

  document.getElementById("logout-btn").addEventListener("click", auth_logout);
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
}

function renderUnitLockedScreen() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.style.display = "none";
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) menuToggle.style.display = "none";
  document.getElementById("crumb").textContent = "Locked";

  const idx = (typeof UNITS_META !== "undefined") ? UNITS_META.findIndex((u) => u.num === UNIT_DATA.num) : -1;
  const prevUnit = idx > 0 ? UNITS_META[idx - 1] : null;

  document.getElementById("content").innerHTML = `
    <div class="locked-screen">
      <div class="locked-icon">🔒</div>
      <h1 class="part-title">This unit is locked</h1>
      <p class="locked-text">${prevUnit
        ? `Finish every part of <b>Unit ${prevUnit.num}: ${esc(prevUnit.title)}</b> first to unlock this unit.`
        : "Complete the previous unit first."}</p>
      <a href="student-dashboard.html" class="btn btn-primary">&larr; Back to Dashboard</a>
    </div>
  `;
}

function firstIncompletePart() {
  for (const p of UNIT_DATA.parts) {
    if (!progress_isComplete(SESSION.username, UNIT_DATA.num, p.num)) return p.num;
  }
  return 1;
}

function renderSidebarHead() {
  document.getElementById("sidebar-unit-title").textContent = `Unit ${UNIT_DATA.num}: ${UNIT_DATA.title}`;
  document.getElementById("sidebar-unit-sub").textContent = UNIT_DATA.tagline;
}

function renderSidebarProgress() {
  const stats = progress_getUnitStats(SESSION.username, UNIT_DATA.num, UNIT_DATA.totalParts);
  document.getElementById("sidebar-progress-fill").style.width = stats.pct + "%";
  document.getElementById("sidebar-progress-label").textContent = `${stats.completed} / ${stats.total} parts complete (${stats.pct}%)`;
}

function renderPartList() {
  const list = document.getElementById("part-list");
  list.innerHTML = "";
  UNIT_DATA.parts.forEach((p) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const done = progress_isComplete(SESSION.username, UNIT_DATA.num, p.num);
    const unlocked = progress_isPartUnlocked(SESSION.username, UNIT_DATA.num, p.num);
    let cls = (p.num === CURRENT_PART ? "active " : "") + (done ? "done " : "") + (!unlocked ? "locked" : "");
    btn.className = cls.trim();
    btn.disabled = !unlocked;
    if (!unlocked) btn.title = "Complete the previous part first";
    const icon = done ? "✓" : (!unlocked ? "🔒" : "");
    btn.innerHTML = `<span class="p-num">${String(p.num).padStart(2, "0")}</span><span class="p-title">${p.title}</span><span class="p-check">${icon}</span>`;
    if (unlocked) btn.addEventListener("click", () => goToPart(p.num));
    li.appendChild(btn);
    list.appendChild(li);
  });
  renderSidebarProgress();
}

function goToPart(num) {
  if (!progress_isPartUnlocked(SESSION.username, UNIT_DATA.num, num)) {
    toast("Complete the previous part first.", true);
    return;
  }
  CURRENT_PART = num;
  location.hash = "part=" + num;
  renderPartList();
  renderContent();
  window.scrollTo(0, 0);
  document.getElementById("sidebar").classList.remove("open");
}

function esc(s) {
  return (s || "").toString().replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderContent() {
  const part = UNIT_DATA.parts.find((p) => p.num === CURRENT_PART);
  const content = document.getElementById("content");
  const isDone = progress_isComplete(SESSION.username, UNIT_DATA.num, part.num);

  document.getElementById("crumb").innerHTML = `Unit ${UNIT_DATA.num} <b>&rsaquo; Part ${part.num} of ${UNIT_DATA.totalParts}</b>`;

  let html = "";
  html += `<div class="eyebrow">PART ${String(part.num).padStart(2, "0")} / ${String(UNIT_DATA.totalParts).padStart(2, "0")}</div>`;
  html += `<h1 class="part-title">${esc(part.title)}</h1>`;
  html += `<div class="objective-box"><b>Learning Objective</b>${esc(part.objective)}</div>`;

  if (part.video) {
    html += `<div class="video-wrap">
      <div class="video-label">▶ &nbsp;${esc(part.video.title)}</div>
      <div class="video-frame"><iframe src="https://www.youtube.com/embed/${part.video.id}" title="${esc(part.video.title)}" allowfullscreen loading="lazy"></iframe></div>
    </div>`;
  }

  html += `<div class="prose">`;
  (part.content || []).forEach((block) => {
    if (block.h3) html += `<h3>${block.h3}</h3>`;
    if (block.p) html += `<p>${block.p}</p>`;
    if (block.ul) html += `<ul>${block.ul.map((li) => `<li>${li}</li>`).join("")}</ul>`;
  });
  html += `</div>`;

  if (part.code) {
    html += `<div class="code-block"><div class="code-label">${esc(part.code.label || "Code example")}</div><pre>${esc(part.code.lines.join("\n"))}</pre></div>`;
  }

  // Completion status banner (completion is earned only by submitting the worksheet below)
  if (isDone) {
    html += `<div class="mark-complete-row done-row">
      <div class="txt"><b>✓ Part complete</b>You've submitted this worksheet. You can revisit and resubmit it any time — your latest submission always counts.</div>
    </div>`;
  } else if (part.worksheet) {
    html += `<div class="mark-complete-row">
      <div class="txt"><b>Not yet complete</b>Submit the worksheet below to mark this part complete and unlock the next one.</div>
    </div>`;
  }

  // Worksheet
  if (part.worksheet) html += renderWorksheetHTML(part.worksheet);

  // Nav
  const idx = UNIT_DATA.parts.findIndex((p) => p.num === part.num);
  const prev = UNIT_DATA.parts[idx - 1];
  const next = UNIT_DATA.parts[idx + 1];
  const unitIdx = (typeof UNITS_META !== "undefined") ? UNITS_META.findIndex((u) => u.num === UNIT_DATA.num) : -1;
  const nextUnit = unitIdx > -1 ? UNITS_META[unitIdx + 1] : null;
  html += `<div class="part-nav">`;
  html += prev ? `<div class="side"><a href="#" data-goto="${prev.num}"><div class="dir">&larr; Previous</div><div class="ttl">${esc(prev.title)}</div></a></div>` : `<div class="side"></div>`;
  if (next) {
    html += `<div class="side right"><a href="#" data-goto="${next.num}"><div class="dir">Next &rarr;</div><div class="ttl">${esc(next.title)}</div></a></div>`;
  } else if (nextUnit) {
    html += `<div class="side right"><a href="${nextUnit.file}"><div class="dir">Unit Complete &rarr;</div><div class="ttl">Start Unit ${nextUnit.num}: ${esc(nextUnit.title)}</div></a></div>`;
  } else {
    html += `<div class="side right"><a href="student-dashboard.html"><div class="dir">Course Complete &rarr;</div><div class="ttl">Back to Dashboard</div></a></div>`;
  }
  html += `</div>`;

  content.innerHTML = html;

  content.querySelectorAll("[data-goto]").forEach((a) => {
    a.addEventListener("click", (e) => { e.preventDefault(); goToPart(parseInt(a.dataset.goto, 10)); });
  });

  if (part.worksheet) bindWorksheet(part);
}

// ---------------- Worksheet rendering ----------------

function renderWorksheetHTML(ws) {
  let html = `<div class="worksheet" id="worksheet">
    <div class="worksheet-head"><div class="ws-icon">W</div><h2>${esc(ws.title)}</h2></div>
    <div class="ws-id">${ws.wsId}</div>
    <div class="ws-instructions">${esc(ws.instructions)}</div>`;

  ws.fields.forEach((f) => {
    html += `<div class="ws-field" data-field-id="${f.id}">`;
    if (f.type === "table") {
      html += `<label>${esc(f.label)}</label>`;
      html += renderTableHTML(f);
    } else if (f.type === "textarea") {
      html += `<label>${esc(f.label)}</label><textarea rows="${f.rows || 3}" data-field="${f.id}"></textarea>`;
    } else {
      html += `<label>${esc(f.label)}</label><input type="text" data-field="${f.id}" />`;
    }
    html += `</div>`;
  });

  html += renderRubricHTML(ws);

  html += `<div class="ws-actions">
    <button class="btn btn-ghost" id="ws-save-draft">Save Draft</button>
    <button class="btn btn-primary" id="ws-submit">Submit Worksheet &amp; Send PDF</button>
    <span class="ws-status" id="ws-status"></span>
  </div>`;
  html += `</div>`;
  return html;
}

function renderTableHTML(f) {
  const cols = f.columns;
  let html = `<table class="ws-table" data-table="${f.id}"><thead><tr>`;
  if (f.rowLabels) html += `<th style="width:120px;"> </th>`;
  else html += `<th style="width:34px;">#</th>`;
  cols.forEach((c) => (html += `<th>${esc(c)}</th>`));
  html += `</tr></thead><tbody>`;
  for (let r = 0; r < f.rows; r++) {
    html += `<tr>`;
    if (f.rowLabels) html += `<td class="rownum">${esc(f.rowLabels[r] || String(r + 1))}</td>`;
    else html += `<td class="rownum">${r + 1}</td>`;
    cols.forEach((c, ci) => {
      html += `<td><textarea rows="1" data-row="${r}" data-col="${ci}"></textarea></td>`;
    });
    html += `</tr>`;
  }
  html += `</tbody></table>`;
  return html;
}

function renderRubricHTML(ws) {
  const maxScore = ws.rubric.reduce((a, r) => a + r.points, 0);
  let html = `<div class="rubric">
    <h3>Rubric — Self-Assessment</h3>
    <div class="rubric-sub">Rate yourself honestly on each criterion. This is a self-assessment your teacher will review with you, not an official grade.</div>`;
  ws.rubric.forEach((r, i) => {
    html += `<div class="rubric-row" data-rubric-index="${i}" data-points="${r.points}">
      <div class="crit">${esc(r.criterion)}</div>
      <select data-rubric="${i}">
        <option value="1" selected>Yes</option>
        <option value="0.5">Partially</option>
        <option value="0">No</option>
      </select>
      <div class="pts">${r.points} pts</div>
    </div>`;
  });
  html += `<div class="score-box"><div><div class="label">Self-Assessed Score</div></div><div class="value" id="rubric-total">${maxScore} / ${maxScore}</div></div>
    <div class="score-note">Discuss this self-assessment with your teacher during your next review session — they may adjust it based on a closer look at your work.</div>
  </div>`;
  return html;
}

function computeRubricScore(ws) {
  let earned = 0;
  const max = ws.rubric.reduce((a, r) => a + r.points, 0);
  const selections = [];
  ws.rubric.forEach((r, i) => {
    const sel = document.querySelector(`select[data-rubric="${i}"]`);
    const mult = parseFloat(sel.value);
    const pts = Math.round(r.points * mult);
    earned += pts;
    selections.push({ criterion: r.criterion, points: r.points, selection: sel.options[sel.selectedIndex].text, earned: pts });
  });
  return { earned, max, selections };
}

function collectFieldValues(ws) {
  const values = {};
  const displayFields = [];
  ws.fields.forEach((f) => {
    if (f.type === "table") {
      const rows = [];
      const table = document.querySelector(`[data-table="${f.id}"]`);
      for (let r = 0; r < f.rows; r++) {
        const rowVals = [];
        f.columns.forEach((c, ci) => {
          const cell = table.querySelector(`textarea[data-row="${r}"][data-col="${ci}"]`);
          rowVals.push(cell ? cell.value : "");
        });
        rows.push(rowVals);
      }
      values[f.id] = rows;
      const rowText = rows.map((rv, ri) => {
        const label = f.rowLabels ? f.rowLabels[ri] : String(ri + 1);
        const nonEmpty = rv.some((v) => v.trim());
        return nonEmpty ? `${label}: ${rv.join(" | ")}` : null;
      }).filter(Boolean).join("\n");
      displayFields.push({ label: f.label, value: rowText || "(no rows filled in)" });
    } else {
      const el = document.querySelector(`[data-field="${f.id}"]`);
      values[f.id] = el ? el.value : "";
      displayFields.push({ label: f.label, value: values[f.id] });
    }
  });
  return { values, displayFields };
}

function loadFieldValues(ws) {
  const saved = progress_getWorksheet(SESSION.username, ws.wsId);
  if (!saved || !saved.answers) return;
  ws.fields.forEach((f) => {
    if (f.type === "table") {
      const rows = saved.answers[f.id];
      if (!rows) return;
      const table = document.querySelector(`[data-table="${f.id}"]`);
      rows.forEach((rowVals, r) => {
        rowVals.forEach((v, ci) => {
          const cell = table.querySelector(`textarea[data-row="${r}"][data-col="${ci}"]`);
          if (cell) cell.value = v;
        });
      });
    } else {
      const el = document.querySelector(`[data-field="${f.id}"]`);
      if (el && saved.answers[f.id] !== undefined) el.value = saved.answers[f.id];
    }
  });
  if (saved.rubricSelections) {
    saved.rubricSelections.forEach((sel, i) => {
      const selEl = document.querySelector(`select[data-rubric="${i}"]`);
      if (!selEl) return;
      const mult = sel.earned === sel.points ? "1" : (sel.earned === 0 ? "0" : "0.5");
      selEl.value = mult;
    });
  }
}

function bindWorksheet(part) {
  const ws = part.worksheet;
  loadFieldValues(ws);
  updateRubricTotal(ws);

  document.querySelectorAll('.rubric select').forEach((sel) => {
    sel.addEventListener("change", () => updateRubricTotal(ws));
  });

  const allInputs = document.querySelectorAll(`#worksheet textarea, #worksheet input[type=text]`);
  allInputs.forEach((el) => {
    el.addEventListener("input", () => {
      clearTimeout(SAVE_TIMER);
      setStatus("Typing…", "");
      SAVE_TIMER = setTimeout(() => saveDraft(ws, true), 900);
    });
  });

  document.getElementById("ws-save-draft").addEventListener("click", () => saveDraft(ws, false));
  document.getElementById("ws-submit").addEventListener("click", () => submitWorksheet(part));
}

function updateRubricTotal(ws) {
  const { earned, max } = computeRubricScore(ws);
  const totalEl = document.getElementById("rubric-total");
  if (totalEl) totalEl.textContent = `${earned} / ${max}`;
}

function saveDraft(ws, silent) {
  const { values } = collectFieldValues(ws);
  progress_saveWorksheetDraft(SESSION.username, ws.wsId, values);
  setStatus(silent ? "Draft auto-saved ✓" : "Draft saved ✓", "ok");
}

function setStatus(text, cls) {
  const el = document.getElementById("ws-status");
  if (!el) return;
  el.textContent = text;
  el.className = "ws-status" + (cls ? " " + cls : "");
}

function submitWorksheet(part) {
  const ws = part.worksheet;
  const { values, displayFields } = collectFieldValues(ws);
  const filledCount = displayFields.filter((f) => f.value && f.value.trim() && f.value !== "(no rows filled in)").length;

  if (filledCount === 0) {
    setStatus("Please fill in at least some answers before submitting.", "err");
    toast("Worksheet looks empty — add some answers first.", true);
    return;
  }

  const { earned, max, selections } = computeRubricScore(ws);

  const submitBtn = document.getElementById("ws-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = "Generating PDF…";
  setStatus("Generating PDF and sending to your teacher…", "");

  progress_recordWorksheetSubmission(SESSION.username, ws.wsId, {
    answers: values, rubricSelections: selections, score: earned, maxScore: max,
  });

  pdfExport_buildAndSubmit({
    studentName: SESSION.displayName,
    username: SESSION.username,
    wsId: ws.wsId,
    unitNum: UNIT_DATA.num,
    unitTitle: `Unit ${UNIT_DATA.num}: ${UNIT_DATA.title}`,
    partTitle: `Part ${part.num}: ${part.title}`,
    instructions: ws.instructions,
    fields: displayFields,
    rubric: selections,
    score: earned,
    maxScore: max,
  }).then(() => {
    progress_markComplete(SESSION.username, UNIT_DATA.num, part.num, true, SESSION.displayName);
    renderPartList();
    renderContent();
    setStatus("Submitted! PDF downloaded" + (appscriptConfigured() ? " and sent to your teacher." : ". (Teacher sync not yet configured.)"), "ok");
    toast("Worksheet submitted — part complete! The next part is now unlocked.");
  }).catch((err) => {
    console.error(err);
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Worksheet & Send PDF";
    setStatus("PDF was downloaded, but sending to your teacher failed. Your answers are saved locally.", "err");
  });
}

function appscriptConfigured() {
  return typeof APPSCRIPT_URL !== "undefined" && APPSCRIPT_URL && APPSCRIPT_URL.indexOf("PASTE_YOUR") === -1;
}

function toast(msg, isErr) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = "toast show" + (isErr ? " err" : "");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3200);
}

window.addEventListener("DOMContentLoaded", boot);
