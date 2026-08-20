# Grade 7 Coding — Self-Paced Course Website

A self-contained website for 1-on-1 private coding tutoring. The student
works through 5 units independently, unlocking one topic (and one unit) at a
time by submitting worksheets; the teacher reviews progress and PDF
worksheet submissions.

## How to use this (quick start)

1. **Add your student(s):** open `js/students-config.js` and edit the
   `STUDENTS` list (see comments in that file). Set your own teacher
   password in `TEACHER_ACCOUNT` while you're there.
2. **Open the site:** double-click `index.html` to open it in a browser, or
   host the whole folder on any static web host (GitHub Pages, Netlify,
   Google Sites file hosting, etc.) so it works on any device.
3. **(Recommended) Connect Google Drive/Sheets:** follow
   `appscript/SETUP_INSTRUCTIONS.md` (~10-15 minutes, one time) so worksheet
   PDFs save to your Drive and the Teacher Dashboard shows real progress.
   The site fully works for the student even before you do this — you'll
   just be flying blind on the Teacher Dashboard until it's connected.
4. **Student flow:** `index.html` (public overview) -> clicks **Log In** ->
   `login.html` -> lands on `student-dashboard.html` (detailed progress +
   grades) -> clicks **Start/Continue Learning** -> taken straight to the
   first Part they haven't finished.
5. **You log in** with the teacher account at the same `login.html` and land
   on `teacher-dashboard.html` instead.

## Sequential locking

- **Within a unit:** Part 2 is locked until Part 1's worksheet is submitted,
  Part 3 is locked until Part 2 is submitted, and so on. Locked parts show a
  lock icon in the sidebar and cannot be clicked (or reached by editing the
  URL — this is enforced in `unit-app.js`, not just hidden with CSS).
- **Across units:** Unit 2 is locked until every part of Unit 1 is complete,
  Unit 3 is locked until every part of Unit 2 is complete, etc. Visiting a
  locked unit's page directly shows a full "This unit is locked" screen
  instead of its content.
- **Completion is earned only by submitting a worksheet** (there is no
  separate "mark as read" shortcut) — this matches the requirement that a
  student must submit real work to advance.

## File structure

```
index.html                  PUBLIC landing page - course overview + "Log In" button
login.html                  Student or teacher sign-in
student-dashboard.html      Post-login home: progress, locked/unlocked units, grades table
teacher-dashboard.html      Teacher-only progress + submission viewer
unit1.html ... unit5.html   One page per unit (sidebar = Parts, content area)

css/style.css               All styling (shared design system)

js/students-config.js       <-- YOU EDIT THIS to add/remove students
js/appscript-config.js      <-- YOU EDIT THIS after Apps Script deployment
js/course-config.js         Shared unit metadata (titles, part counts, colors)
                             + ASSESSMENT_WS_IDS (which worksheets count as
                             formal assessments on the grades table)
js/auth.js                  Login/session logic
js/progress.js              Local progress cache, best-effort server sync,
                             and all unit/part locking logic
js/pdf-export.js            Builds worksheet PDFs (jsPDF) + uploads them
js/unit-app.js               Renders a unit page from its data file, enforces
                             part-level and unit-level locks

data/unit1-data.js ... unit5-data.js
                             All course content: explanations, videos,
                             code examples, worksheets, rubrics - one file
                             per unit. Edit these to change course content.
                             Unit 1 has 9 parts (Part 2 is the new
                             "Decomposition Trees" topic).

appscript/Code.gs                  Google Apps Script backend (paste into
                                    Apps Script editor - see below)
appscript/SETUP_INSTRUCTIONS.md    Step-by-step deployment guide
```

## Editing course content

Each `data/unitN-data.js` file is a plain JavaScript object - no build step,
no framework. To tweak wording, swap a video, or adjust a rubric, open the
file and edit the relevant `part` entry directly, then refresh the page.

Each part supports:
- `content`: an array of `{h3}`, `{p}`, or `{ul}` blocks (basic HTML allowed
  inside, e.g. `<strong>`)
- `video`: a YouTube video ID + title
- `code`: an optional code example block
- `worksheet`: instructions, fields (`text`, `textarea`, or `table`), and a
  `rubric` (criteria + points). Add `isAssessment: true` to a worksheet and
  its `wsId` to `ASSESSMENT_WS_IDS` in `js/course-config.js` to have it show
  an "Assessment" badge instead of "Worksheet" on the student's grades table.

If you add or remove a Part from a unit, update that unit's `totalParts` in
BOTH `data/unitN-data.js` and `js/course-config.js` - locking logic depends
on this number being correct.

## Important limitations, honestly stated

- **This is a static site, not a real server.** The login system is a
  lightweight access gate suitable for a private 1-teacher/1-student
  setting - not bank-grade security. Anyone who views page source could see
  the password list in `students-config.js`.
- **Progress is stored per-device** (browser localStorage) as a fast local
  cache. The **Google Sheet is the real source of truth** for the Teacher
  Dashboard, since it works across devices - this is why the Apps Script
  connection matters.
- **Locking is enforced client-side.** A technically determined student
  could bypass it by editing their browser's localStorage directly. This is
  an accepted trade-off for a trust-based private tutoring context, not a
  security boundary.
- **Rubric scores are student self-assessments**, clearly labeled as such
  everywhere they appear - they're a starting point for your review
  conversations, not official grades.
- Video embeds require an internet connection (YouTube). Everything else
  (reading, worksheets, PDF download) works offline once the page is loaded.
