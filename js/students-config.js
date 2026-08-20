/* ============================================================
   STUDENT LOGIN CONFIG
   ============================================================
   Add one line per student below. This is the ONLY file you need
   to edit to control who can log in to the course.

   username / password: whatever you choose — tell the student.
   displayName: shown in the app and used to name their PDF files
                (e.g. "Budi Santoso" -> "Budi Santoso_u1ws01.pdf")

   To add a student: copy a line, change the values, keep the comma.
   To remove a student: delete their line.
   ============================================================ */

const STUDENTS = [
  { username: "student1", password: "changeme1", displayName: "Student One" },
  { username: "student2", password: "changeme2", displayName: "Student Two" },
  // Add more students here, e.g.:
  // { username: "budi", password: "budi123", displayName: "Budi Santoso" },
];

/* ============================================================
   TEACHER LOGIN CONFIG
   Separate credentials for the teacher dashboard (not shown to
   students). Change this password before sharing the site.
   ============================================================ */
const TEACHER_ACCOUNT = { username: "teacher", password: "changeme-teacher" };
