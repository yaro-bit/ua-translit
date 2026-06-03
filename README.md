# UA Translit

A fast, lightweight web application for bidirectional Ukrainian-Latin transliteration. It operates directly inside the browser providing an intuitive environment for real-time text transformation.

---

## Key Features

* **Real-Time Bidirectional Typing:** Instantly converts Latin to Ukrainian Cyrillic or Ukrainian Cyrillic to Latin as you type.
* **Smart Digraph Parsing:** Automatically handles multi-character phonetic sequences (e.g., typing `sh` outputs `ш`, `shh` outputs `щ`, and `g'` outputs `ґ`).
* **Integrated Grammar Checking:** Includes an on-demand, chunk-based grammar and spell-checking overlay powered by the external LanguageTool API.
* **Keyboard-Optimized Workflow:** Supports native browser behavior, a custom multi-step undo stack via `Ctrl + Z`, and quick dropdown dismissal via `Escape`.
* **Responsive Dual-Theming:** Features a clean, high-contrast interface with Light and Dark modes that automatically adapt to system preferences.
* **Character Matrix Guide:** Displays an interactive reference sidebar mapping layout combinations for quick lookup and manual character insertion.

---

## Architecture & Technical Design

### Input Capture Engine
Intercepts input mutations via the DOM `input` event. It uses state tables (`tra` and `abc2`) to evaluate character buffers and modify values before rendering, preventing cursor position drift.

### UI Hierarchy & Layout
Built using standard CSS Custom Properties for unified theme variables, structured via CSS Grid and Flexbox for cross-platform responsiveness.

### Font Stack
Utilizes standard, system-level monospace font stacks (`SF Mono`, `Consolas`, `Menlo`) to guarantee deterministic rendering and precise alignment between the text area and the error markup overlay.
