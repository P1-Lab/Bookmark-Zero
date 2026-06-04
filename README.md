# Bookmark Zero

Bookmark Zero is a lightweight browser extension that treats bookmarks as decisions, not storage.

Most people do not have a bookmark problem.

They have an **attention problem.**

Bookmarks accumulate because saving is easy and revisiting is rare.

Bookmark Zero attempts to solve this by introducing:

- Inbox-first bookmark capture
- Lightweight triage workflows
- Temporary vs permanent bookmark states
- Automatic decay and resurfacing
- Local-first storage

---

# Core Idea

Traditional bookmarks look like:

```

Save
Save
Save
Forget
Save
Forget
3000 bookmarks

```

Bookmark Zero aims for:

```

Capture

↓

Inbox

↓

Decide

↓

Use or Delete

```

---

# Current Status

Early MVP.

The current goal is to answer one question:

> Will people actually triage bookmarks if given lightweight friction?

Nothing more.

---

# Features (MVP)

## Capture

Intercept bookmark creation.

Everything goes into:

```

INBOX

```

---

## Triage

Bookmarks move into:

- Active
- Research
- Reference
- Personal
- Flash
- Delete

---

## Decay

Temporary bookmarks automatically expire.

Examples:

- Flash → 7 days
- Untouched bookmarks → resurfaced later

---

## Local First

Bookmark Zero:

- stores data locally
- requires no account
- has no cloud dependency
- does not sell data
- does not require subscriptions

---

# Repository Structure

```

bookmark-zero/

├── manifest.json

├── src/

│ ├── background.js

│ ├── bookmarkInterceptor.js

│ ├── storage.js

│ ├── triageEngine.js

│ │

│ ├── popup/

│ ├── triage/

│ └── settings/

└── tests/

```

---

# Development Goals

Priority order:

1. Capture bookmarks
2. Create inbox
3. Enable triage
4. Add decay
5. Add resurfacing

Everything else is secondary.

---

# Non Goals

Bookmark Zero is NOT:

- a second brain
- a knowledge management platform
- a social network
- a cloud service
- an AI platform

---

# Philosophy

Bookmarks are not storage.

Bookmarks are deferred attention.

The goal is not:

> Save everything.

The goal is:

> Make saved information useful again.
>
> # Running Bookmark Zero

This is a **Chrome Extension (Manifest V3)**.

There is no build step. No compilation. No install script.

You load it directly into Chrome.

---

# 1. Folder Structure Check

Make sure your repo looks like this:

```
bookmark-zero/
├── manifest.json
└── src/
    ├── background.js
    ├── popup.html
    ├── popup.js
    ├── storage.js
    └── triageEngine.js
```

IMPORTANT:
- `manifest.json` must be in the ROOT folder
- Do NOT load the `src/` folder in Chrome

---

# 2. Load the Extension in Chrome

1. Open Chrome
2. Go to:
   ```
   chrome://extensions
   ```
3. Enable:
   ```
   Developer mode (top right toggle)
   ```
4. Click:
   ```
   Load unpacked
   ```
5. Select the **bookmark-zero/** folder (root folder)

---

# 3. How to Test It

Once loaded:

### Step 1 — Create a bookmark
Bookmark any page in Chrome.

### Step 2 — Open the extension
Click the puzzle icon → select **Bookmark Zero**

### Step 3 — Check popup
You should see your bookmarked item listed as:

- INBOX state item(s)

---

# 4. Expected Behavior

When you bookmark a page:

- It is automatically captured
- It is stored in `chrome.storage.local`
- It appears in the popup under INBOX

When you click a state button:

- The bookmark updates state (ACTIVE / RESEARCH / FLASH)
- It disappears from INBOX view

---

# 5. Debugging (if nothing works)

Open:

```
chrome://extensions
```

Find **Bookmark Zero** → click:

- “Service worker” → Inspect

Check console for:

```
Captured: Page Title
```

If you do NOT see logs:
- background script is not running
- or manifest path is incorrect

---

# 6. Important Notes

- No build tools required
- No bundler required
- No TypeScript required
- Everything runs directly in Chrome

This is intentionally minimal.

---

# 7. Philosophy

Bookmark Zero is not a storage system.

It is a **decision system for attention**.

Bookmarks are treated as:

> items that must be triaged, not stored forever
```

---

# License

MIT
