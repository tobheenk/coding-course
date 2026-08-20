/* ============================================================
   AUTH — simple session gate for a static-site private classroom.
   NOTE: this is a lightweight access gate, not bank-grade security.
   Anyone who views the page source could see the credential list
   in students-config.js. That's an acceptable trade-off for a
   private 1-teacher/1-student static site, but you should know it.
   ============================================================ */

const SESSION_KEY = "g7c_session"; // { type: 'student'|'teacher', username, displayName }

function auth_getSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
  } catch (e) {
    return null;
  }
}

function auth_setSession(session) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function auth_logout() {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = "login.html";
}

// Call at the top of every protected student page.
function auth_requireStudent() {
  const s = auth_getSession();
  if (!s || s.type !== "student") {
    window.location.href = "login.html";
    return null;
  }
  return s;
}

// Call at the top of the teacher dashboard.
function auth_requireTeacher() {
  const s = auth_getSession();
  if (!s || s.type !== "teacher") {
    window.location.href = "login.html";
    return null;
  }
  return s;
}

function auth_tryLogin(username, password) {
  const u = (username || "").trim().toLowerCase();
  const p = password || "";

  const student = STUDENTS.find(
    (st) => st.username.toLowerCase() === u && st.password === p
  );
  if (student) {
    auth_setSession({ type: "student", username: student.username, displayName: student.displayName });
    return { ok: true, type: "student" };
  }

  if (TEACHER_ACCOUNT.username.toLowerCase() === u && TEACHER_ACCOUNT.password === p) {
    auth_setSession({ type: "teacher", username: TEACHER_ACCOUNT.username, displayName: "Teacher" });
    return { ok: true, type: "teacher" };
  }

  return { ok: false };
}
