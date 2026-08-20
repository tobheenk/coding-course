# Apps Script Setup — Step by Step

This connects the course website to your own Google Drive + Google Sheet, so
worksheet PDFs land in your Drive automatically and you can see student
progress on the Teacher Dashboard. You only need to do this once.

Total time: about 10-15 minutes.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new,
   blank spreadsheet.
2. Name it something like **"Grade 7 Coding — Submission Log"**.
3. Look at the URL in your browser. It looks like:
   `https://docs.google.com/spreadsheets/d/`**`1AbCdEfGhIjKlMnOpQrStUvWxYz`**`/edit`
4. Copy the long ID part (between `/d/` and `/edit`) — you'll need it in Step 4.

You don't need to create any tabs/columns yourself — the script creates
"Submissions" and "PartLog" tabs automatically the first time it runs.

---

## Step 2 — Create (or choose) a Google Drive folder for PDFs

1. Go to [drive.google.com](https://drive.google.com).
2. Create a new folder, e.g. **"Grade 7 Coding — Worksheet PDFs"** (or pick an
   existing folder).
3. Open the folder and copy its ID from the URL, the same way as Step 1:
   `https://drive.google.com/drive/folders/`**`1XyZ...`**

---

## Step 3 — Open the Apps Script editor

1. In your Google Sheet from Step 1, click **Extensions → Apps Script**.
2. This opens a new tab with a blank script editor (usually showing an empty
   `function myFunction() {}`).
3. Select all the existing starter code and delete it.
4. Open the file **`Code.gs`** (in this same folder you downloaded), copy its
   entire contents, and paste it into the Apps Script editor.

---

## Step 4 — Paste in your IDs

At the top of the script you pasted, find these two lines:

```js
const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const FOLDER_ID = "PASTE_YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE";
```

Replace the placeholder text with the two IDs you copied in Steps 1 and 2,
keeping the quotation marks. For example:

```js
const SHEET_ID = "1AbCdEfGhIjKlMnOpQrStUvWxYz";
const FOLDER_ID = "1XyZ...";
```

Click the **save icon** (or press Ctrl+S / Cmd+S).

---

## Step 5 — Deploy as a Web App

1. Click the blue **Deploy** button (top right) → **New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description**: "Grade 7 Coding backend" (anything you like)
   - **Execute as**: **Me** (your own Google account)
   - **Who has access**: **Anyone**
     *(This does NOT give access to your Drive/Sheet — it only allows the
     website to call this specific script. The script only does what the
     code above says: save PDFs and log rows.)*
4. Click **Deploy**.
5. The first time, Google will ask you to **authorize** the script — click
   through the prompts (you may see an "unverified app" warning since this is
   your own personal script; click **Advanced → Go to [project name]
   (unsafe)** — this is expected and safe since you wrote/pasted the code
   yourself).
6. After deploying, you'll see a **Web app URL** that looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Copy that entire URL.

---

## Step 6 — Paste the URL into the website

1. Open the file **`js/appscript-config.js`** from the course website files.
2. Replace the placeholder line:
   ```js
   const APPSCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
   with your real URL:
   ```js
   const APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
3. Save the file. Re-upload/replace it wherever you're hosting the website
   files.

That's it! From now on:
- Every worksheet a student submits will save a PDF into your Drive folder
  and log a row in your Sheet.
- The Teacher Dashboard (`teacher-dashboard.html`) will show this data
  automatically when you sign in with the teacher account and click
  "Refresh from Google Sheet".

---

## If something goes wrong

- **Dashboard shows nothing / an error**: double-check the Web App is
  deployed with "Who has access: Anyone", and that you copied the FULL URL
  (ending in `/exec`) into `appscript-config.js`.
- **"Authorization required" errors**: re-open the Apps Script editor, click
  Deploy → Manage deployments, and make sure there's an active deployment.
  If you edit `Code.gs` later, you need to create a **new deployment version**
  (Deploy → Manage deployments → Edit (pencil icon) → New version → Deploy)
  for changes to take effect.
- **PDFs not appearing in Drive**: double-check `FOLDER_ID` is correct and
  that the Google account you used to deploy ("Execute as: Me") has edit
  access to that folder.
- Whatever happens, students are never blocked — the site always downloads
  their PDF locally first, and their answers stay saved in their browser
  regardless of whether the Apps Script sync succeeds.
