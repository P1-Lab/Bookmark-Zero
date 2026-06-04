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

---

# License

MIT
