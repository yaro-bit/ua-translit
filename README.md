# UAtranslit

A high-performance, client-side Ukrainian transliterator designed as a privacy-first, zero-dependency alternative to legacy tools like translit.ru.

Unlike traditional services that rely on server-side processing and tracking scripts, UAtranslit runs entirely in the browser, ensuring complete data sovereignty and sub-millisecond conversion latency.

## Key Features

* **Bidirectional Real-Time Conversion:** Seamless typing conversion for both Latin to Ukrainian and Ukrainian to Latin modes.
* **Privacy by Design:** 100% client-side execution. No analytics, no external APIs, no data leaks.
* **Legacy Replacement:** Replaces outdated web tools with a modern, high-contrast, accessible developer-grade UI.
* **Intuitive Digraph Handling:** Smart buffer logic to parse complex phonetic mappings (e.g., sh to ш, shh to щ, g' to ґ).
* **Keyboard-First Workflow:** Fast mode toggling via Esc and local undo stack management (Ctrl + Z).
* **Ultra-Lightweight Stack:** Zero external runtime dependencies. Zero infrastructure footprint.

---

## Architecture and Technical Specifications

The application is built using an ephemeral state-machine pattern for real-time text transformation.

### Core Mapping Engine
The translation engine uses structured character-buffer mapping (tra and abc2 tables) to dynamically intercept and mutate keystrokes before they commit to the DOM. This eliminates input lag and prevents caret-position drift during multi-character digraph translations.

### Layout and UI Layer
* **Typography:** Google Fonts integration (DM Mono) optimized for cryptographic/monospace clarity.
* **Theming:** Native CSS Custom Properties (--bg-main, --bg-surface, etc.) implementing standard dark/light mode states coupled with window.matchMedia hardware-level querying for system defaults.
* **Hardware Acceleration:** Key visual transitions use decoupled hardware-accelerated transforms (transform: scale(), opacity) via the composite layer to eliminate layout thrashing.

---

## Transliteration Rule Engine

| Latin Input | Cyrillic Output | Context / Notes |
| :--- | :--- | :--- |
| s | **с** | Standard mapping |
| sh | **ш** | Automatic digraph resolution |
| shh / q | **щ** | Extended digraph / shorthand constraint |
| g' | **ґ** | Explicit modifier key assignment |
| i' | **ї** | Explicit modifier key assignment |
| zh | **ж** | Multi-character buffering |
| ch | **ч** | Multi-character buffering |
| + | **-** | Explicit digraph separator (escapes automatic joining) |

---

## Deployment and Installation

Because the application is strictly contained within a single `index.html` file, deployment requires no build step, no npm overhead, and no containerization.

### Local Execution
1. Clone the repository:
```bash
   git clone [https://github.com/your-username/ua-translit.git](https://github.com/your-username/ua-translit.git)
