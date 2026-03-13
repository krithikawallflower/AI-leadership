# Think — Miro-Style Canvas View

## Overview

The **Think** pillar card on `Dashboard.jsx` navigates the user to a new `ThinkCanvas` view. This view is a full-screen, scrollable infinite canvas inspired by Miro, where each "frame" represents a course day. Six frames are arranged horizontally across the canvas. The first four frames are accessible; the final two are locked (visually blurred with a lock icon overlay). The user lands on Frame 1 on entry.

---

## Design Tokens & Visual Language

Inherit fully from the existing global design system so the view feels continuous with the Dashboard.

| Token | Value |
|---|---|
| `--bg-primary` | `#ffffff` (light) / `#020617` (dark) |
| `--bg-secondary` / canvas background | `#f1f5f9` / `#0f172a` — slightly tinted to give depth |
| `--accent-primary` | `#1d4ed8` (blue) |
| `--accent-secondary` | `#60a5fa` (light blue) |
| `--border-color` | `#e2e8f0` |
| `--card-shadow` | Existing shadow tokens |
| Typography | `'Outfit'` (headings), `'Inter'` (body) |

The canvas background should use a subtle **dot-grid pattern** (like Miro) rendered as a repeating SVG or CSS background — a 20 px grid of `2px` dots in `var(--border-color)`.

---

## Navigation Entry Point

**File:** `src/pages/Dashboard.jsx`

The `Think` pillar card already calls `setCurrentPage('think')`. The router/page manager (`App.jsx`) needs to register `think` → `<ThinkCanvas />`.

---

## Layout & Canvas Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│  Top Bar  [← Back]   [Mini-map]   [Zoom controls]   [Export]        │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SCROLLABLE CANVAS (pan + scroll, x and y)                          │
│                                                                      │
│  [Frame 1]  [Frame 2]  [Frame 3]  [Frame 4]  [Frame 5🔒] [Frame 6🔒]│
│                                                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┤
│  Tool Dock (horizontal, bottom-centre)                               │
└──────────────────────────────────────────────────────────────────────┘
```

### Canvas Container
- `overflow: hidden` on the root, with JS-driven `transform: translate()` for panning and `scale()` for zoom.
- Initial `transform-origin: top left`.
- Mouse-drag to pan; scroll wheel to zoom (or shift+scroll to pan horizontally).
- On mount, the canvas is programmatically scrolled to centre **Frame 1** in the viewport.

### Frame Row
- 6 frames laid out with `display: flex; gap: 80px` inside the canvas coordinate space.
- Each frame is **1100 × 780 px** (canvas units).
- Spacing from the canvas edges: 120 px top/bottom.

---

## Frame Anatomy

Each frame is a self-contained card within the canvas.

```
┌─────────────────────────────────────────────────────┐
│  DAY NUMBER   Frame Label                            │
│  ─────────────────────────────────────────────────  │
│                                                      │
│  Artifacts Row  (3 screenshot tiles)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Doc Shot │  │ PPT Shot │  │ Doc Shot │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                      │
│  Post-it Zone   (sticky notes, drag-free)            │
│  ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │ Note 1 │ │ Note 2 │ │ Note 3 │                   │
│  └────────┘ └────────┘ └────────┘                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Frame Header
- **Day badge:** small pill, e.g. `DAY 1`, styled with `background: var(--accent-primary-20); color: var(--accent-primary)`. Font: `'Outfit'`, `0.7rem`, uppercase, letter-spaced.
- **Frame title:** e.g. *"Foundations of AI Leadership"* — `1.25rem`, `font-weight: 300`, `color: var(--text-primary)`.
- A thin `1px` horizontal rule (`var(--border-color)`) beneath the header.

### Artifact Tiles (Screenshots)
Three tiles per frame, arranged in a row with `gap: 16px`.

**Tile design:**
- `240 × 160 px` rounded cards (`border-radius: 12px`), white background, `var(--card-shadow)`.
- Inside each tile: dummy content rendered via CSS/HTML to mimic a document or slide.
  - **Document tile:** Narrow grey lines (text simulacra), a small title bar in `var(--accent-primary)`, file icon top-left (`FileText` from Lucide).
  - **PPT tile:** A coloured header band (gradient in accent blues), 2–3 grey placeholder rectangles, a small chart simulacrum (3 bars in `var(--accent-secondary)`).
- A label beneath each tile: filename or slide title in `0.7rem`, `var(--text-tertiary)`.
- On hover: slight lift (`translateY(-3px)`) and increased shadow.

### Post-it Zone
A defined drop zone (dashed `2px` border in `var(--border-color)`) below the artifacts row.

**Post-it notes:**
- `120 × 120 px` squares with a slightly rotated default angle (±3°), each in a warm accent: use 4 colours — yellow `#fef08a`, lavender `#e0e7ff`, mint `#d1fae5`, coral `#fee2e2`.
- Font: `'Inter'`, `0.8rem`, `var(--text-primary)`.
- **Draggable:** each note has `draggable` behaviour; users can drag them anywhere on the canvas (not just within the frame). Position stored in component state.
- 2–4 default post-its per frame with contextual dummy text tied to the day's theme.

### Frame Border & Shadow
- `border: 1px solid var(--border-color)`, `border-radius: 20px`, `background: var(--bg-primary)`.
- `box-shadow: var(--card-shadow)`.

---

## Locked Frames (Frame 5 & Frame 6)

- Rendered identically to unlocked frames in terms of structure.
- Overlaid with a **frosted glass layer**: `backdrop-filter: blur(8px)`, `background: rgba(var(--bg-secondary-rgb), 0.6)`.
- A centred lock indicator:
  - Lucide `Lock` icon (28 px), `color: var(--text-tertiary)`.
  - Label beneath: `"Unlocks on Day 5"` / `"Unlocks on Day 6"` — `0.85rem`, `var(--text-secondary)`.
- Dragging is disabled on locked frames; cursor shows `not-allowed`.
- Post-its and artifacts are visible but blurred, giving a preview.

---

## Top Bar

Fixed at the top of the viewport (not part of the canvas), height `56px`, `background: var(--glass-bg)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--border-color)`.

| Element | Detail |
|---|---|
| **Back arrow** | `← Back` using Lucide `ArrowLeft`, navigates to `setCurrentPage('dashboard')` |
| **View title** | `Think` in `'Outfit'` font, `1rem` |
| **Frame navigator** | Pill row: `Day 1` · `Day 2` · … `Day 6` — clicking scrolls canvas to that frame (smooth animation) |
| **Zoom controls** | `−` / reset / `+` buttons, `0.85rem` |
| **Export button** | Ghost button, `Download` icon, labels: `Export Board` |

---

## Tool Dock

Floating dock, horizontally centred, pinned `24px` above the bottom viewport edge. Does **not** scroll with the canvas.

**Container:** `background: var(--bg-primary)`, `border: 1px solid var(--border-color)`, `border-radius: 20px`, `box-shadow: var(--card-shadow-hover)`, `padding: 10px 16px`, `display: flex; gap: 8px; align-items: center`.

### Tools

| Icon (Lucide) | Label | Behaviour |
|---|---|---|
| `StickyNote` | Post-it | Creates a new draggable post-it and places it at canvas centre |
| `Square` | Shape | Toggles a shape picker popover (rectangle, circle, diamond) |
| `Minus` (styled as arrow) | Connector | Activates a connector draw mode — click two elements to connect |
| `Type` | Text | Drops an inline editable text node on the canvas |
| `Image` | Image | Opens a file picker to drop a custom image tile |
| `Hand` | Pan | Switches cursor to pan/grab mode (default) |
| `MousePointer` | Select | Default selection tool |

Active tool is highlighted with `background: var(--accent-primary-20); color: var(--accent-primary)`.

Separator (`|`) between tool groups: Navigation tools vs. Creation tools.

---

## Dummy Frame Content

| Frame | Title | Artifact 1 | Artifact 2 | Artifact 3 | Post-it Themes |
|---|---|---|---|---|---|
| **Day 1** | Foundations of AI Leadership | *AI Landscape Overview.pdf* (doc tile) | *Session 1 Slides.pptx* (ppt tile) | *Pre-read: The AI Imperative.pdf* (doc tile) | "What surprised me?", "My biggest question", "Key takeaway" |
| **Day 2** | Strategy & Opportunity Mapping | *Strategy Framework.pdf* | *Opportunity Map Deck.pptx* | *Case Study: NHS AI.pdf* | "Biggest opportunity", "Risk I see", "Who should own this?" |
| **Day 3** | Operating Model Design | *OM Design Template.docx* | *Blueprint Session Slides.pptx* | *Benchmark Report.pdf* | "Gap I noticed", "Quick win", "Blocker to address" |
| **Day 4** | AI Ethics & Governance | *Ethics Checklist.pdf* | *Governance Slides.pptx* | *Policy Brief.pdf* | "Ethical tension", "My red line", "Stakeholder concern" |
| **Day 5** *(locked)* | Scaling & Transformation | *(blurred)* | *(blurred)* | *(blurred)* | *(blurred)* |
| **Day 6** *(locked)* | Executive Synthesis | *(blurred)* | *(blurred)* | *(blurred)* | *(blurred)* |

---

## State Management

All canvas state lives in a single `ThinkCanvas` component (or a `useCanvasState` hook):

```
canvasState {
  offsetX: number          // current pan X
  offsetY: number          // current pan Y
  scale: number            // zoom level (default 1.0, range 0.4–2.0)
  activeTool: string       // 'select' | 'pan' | 'sticky' | 'shape' | 'connector' | 'text' | 'image'
  postIts: [               // array of all post-it notes
    { id, frameId, x, y, content, color, rotation }
  ]
  connections: [           // connector lines
    { id, fromId, toId }
  ]
  shapes: [                // dropped shapes
    { id, type, x, y, w, h }
  ]
}
```

Post-it positions and content persist in `localStorage` keyed to `think-canvas-state` so edits survive page refreshes.

---

## Component File Structure

```
src/
├── pages/
│   └── ThinkCanvas.jsx           ← Main page, canvas root
├── components/think/
│   ├── CanvasFrame.jsx           ← Single frame card
│   ├── ArtifactTile.jsx          ← Screenshot tile (doc / ppt variants)
│   ├── PostIt.jsx                ← Draggable sticky note
│   ├── ToolDock.jsx              ← Bottom floating dock
│   ├── TopBar.jsx                ← Top bar with navigation
│   ├── LockedOverlay.jsx         ← Blur + lock overlay for frames 5 & 6
│   └── ConnectorLayer.jsx        ← SVG overlay for connector lines
```

---

## Routing Change

**File:** `src/App.jsx` (or wherever `setCurrentPage` is consumed)

Add a new case to the page-switch logic:
```jsx
case 'think':
  return <ThinkCanvas />;
```

---

## Accessibility & Interactions

- All tool dock buttons: `aria-label`, keyboard focusable.
- Frame navigator pills: `aria-current="true"` on the active day.
- Locked frames: `aria-disabled="true"` and a tooltip on hover explaining unlock condition.
- Pan via keyboard: arrow keys shift the canvas by `40px` when canvas is focused.
- Zoom: `Cmd/Ctrl + =` / `Cmd/Ctrl + -`.

---

## Verification Plan

1. **Routing:** Clicking `Think` on the Dashboard navigates cleanly to the canvas without a full page reload.
2. **Canvas pan/scroll:** Drag-to-pan works smoothly; scroll zooms correctly.
3. **Frame snap:** Frame navigator pills animate the canvas to the correct frame.
4. **Drag post-its:** Post-its can be dragged across the canvas; position persists on refresh.
5. **Locked state:** Frames 5 & 6 display the blur overlay; drag events are blocked; content is visible but unreadable.
6. **Tool dock:** Each tool changes the active state indicator; `Post-it` tool drops a new note.
7. **Dark mode:** All tokens resolve correctly in `[data-theme='dark']`.
8. **Back navigation:** `← Back` returns to the Dashboard.
