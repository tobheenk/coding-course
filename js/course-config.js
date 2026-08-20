/* ============================================================
   COURSE CONFIG — single source of truth for unit metadata.
   Used by: index.html, student-dashboard.html, teacher-dashboard.html,
   and unit-app.js (for cross-unit locking).
   ============================================================ */

const UNITS_META = [
  { num: 1, file: "unit1.html", accent: "#1E2761", title: "Computational Thinking", tagline: "Decomposition, patterns, abstraction, and algorithms.", totalParts: 9 },
  { num: 2, file: "unit2.html", accent: "#CC6600", title: "Block-Coding Review (Scratch)", tagline: "A fast, thorough refresher of Scratch basics.", totalParts: 2 },
  { num: 3, file: "unit3.html", accent: "#0F5C4A", title: "Advanced Loops, Variables & Conditionals", tagline: "Nested logic, scoring systems, and a full mini-game.", totalParts: 12 },
  { num: 4, file: "unit4.html", accent: "#7A2048", title: "Creative Coding Project", tagline: "Design, build, and present an original project.", totalParts: 8 },
  { num: 5, file: "unit5.html", accent: "#1E3A5F", title: "Introduction to Text-Based Coding", tagline: "Your first steps into real Python programming.", totalParts: 6 },
];

// Worksheet IDs that represent a formal "Review & Assessment" (as opposed to a
// regular practice worksheet or project submission). Used by the student
// dashboard's grades table to show a "Assessment" vs "Worksheet" badge.
// Keep this in sync with any worksheet that has `isAssessment: true` in its
// unit data file.
const ASSESSMENT_WS_IDS = ["u1ws09", "u5ws06"];
