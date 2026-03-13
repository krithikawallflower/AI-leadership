# Visualisation Page & Dashboard Enhancement Plan

## Overview

Two distinct pieces of work:

1. **New "Visualisation" page** — a near-clone of `Dashboard.jsx`, registered as a separate route (`visualisation`) and accessible via the hamburger menu drawer.
2. **Operating Model visualisation** — an animated SVG/canvas component inserted into the existing `Course Journey` section of `Dashboard.jsx` (and its clone), sitting *above* the timeline. The animation progresses through three states tied to Week 1 → 2 → 3 of the course.
3. **Timeline refinement** — slim down the `Course Journey` timeline inside `Timeline.jsx` to a thin line with small dots; reduce all text sizes.

---

## 1 · New "Visualisation" Page

### What it is
A clone of `Dashboard.jsx` that shares the same layout shell (hero section, Course Journey section, pillars grid) but is independently navigable and may later diverge in content.

### Files affected

| Action | File |
|--------|------|
| **[NEW]** | `src/pages/Visualisation.jsx` |
| **[MODIFY]** | `src/App.jsx` — add import + `'visualisation'` case in `renderPage()` |
| **[MODIFY]** | `src/components/Header.jsx` — add menu item under **Main Views** in the hamburger drawer |

#### `App.jsx` change
```js
import Visualisation from './pages/Visualisation';
// inside renderPage():
case 'visualisation': return <Visualisation />;
```

#### `Header.jsx` change (hamburger drawer — Main Views section)
Add a third `<button>` menu item after "Teaching Assistant":
```jsx
<button
  className={`menu-item ${currentPage === 'visualisation' ? 'active' : ''}`}
  onClick={() => navigateTo('visualisation')}
>
  <div className="item-icon"><BarChart2 size={20} /></div>
  <div className="item-content">
    <span className="item-title">Visualisation</span>
    <span className="item-desc">Operating model journey</span>
  </div>
  <ChevronRight size={16} className="arrow" />
</button>
```
Import `BarChart2` from `lucide-react`.

#### `Visualisation.jsx`
Copy `Dashboard.jsx` 1-for-1. The hero subtitle should read something relevant to "operating model journey" rather than the generic day-tracker text. The `<Timeline>` and `<OperatingModelVisualisation>` components will be shared with Dashboard (imported), so both pages get the animated section automatically.

---

## 2 · Operating Model Visualisation Component

### Concept

The component represents a company's **operating model** evolving across three weeks. It is driven by the `currentDay` context (Days 1–2 = Week 1, Days 3–4 = Week 2, Days 5–6 = Week 3).

| Week | Stage | Visual character |
|------|-------|-----------------|
| Week 1 (Days 1–2) | **Skeleton** | Faint outline / wireframe only; nodes and edges drawn with dashed strokes; labels are ghost/placeholder lines |
| Week 2 (Days 3–4) | **Blueprint** | Solid strokes, structural colour (single blue tone, `var(--accent-primary)`); all shapes filled with low-opacity tint; labels appear in full |
| Week 3 (Days 5–6) | **Detailed** | Full render — richer shapes, icons, badges, subtle inner shadows; still **monochromatic** (blue palette only, consistent with the existing colour tokens) |

### Component structure

```
src/components/OperatingModelVisualisation.jsx
```

This is a **self-contained React component** using inline SVG (or `<canvas>` with SVG fallback — SVG preferred for crisp scaling). No external charting library; pure React + CSS animations.

#### Layout of the operating model (Week 3 reference design)

```
┌──────────────────────────────────────────────────────────┐
│  STRATEGY                                                │
│  ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐   │
│  │People  │───▶│Process │───▶│Tech    │───▶│Data    │   │
│  └────────┘    └────────┘    └────────┘    └────────┘   │
│        ▼              ▼             ▼            ▼       │
│  ┌─────────────────────────────────────────────────┐    │
│  │              GOVERNANCE & OVERSIGHT              │    │
│  └─────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

- Six nodes: **Strategy** (top centre), **People**, **Process**, **Technology**, **Data**, **Governance** (bottom spanning)
- Directed edges connecting nodes with arrows
- A central "AI" hub node overlaid where all four middle pillars converge

#### Animation / progression logic

The component accepts a `currentDay` prop (integer, 1–6).

```js
const week = currentDay <= 2 ? 1 : currentDay <= 4 ? 2 : 3;
```

State transitions animate via CSS `transition` + React state:
- **Skeleton → Blueprint**: opacity of fills rises; strokes transition from `stroke-dasharray` to solid; label opacity fades in
- **Blueprint → Detailed**: iconography fades in; inner-fill goes from low to medium opacity; node borders gain subtle shadow

All transitions: `0.8s cubic-bezier(0.4, 0, 0.2, 1)` for a premium feel.

#### Colour tokens used (monochromatic, all blues)

| Role | Token |
|------|-------|
| Skeleton stroke | `var(--border-color)` |
| Blueprint stroke / text | `var(--accent-primary)` |
| Blueprint fill | `var(--accent-primary-20)` |
| Detailed fill | `var(--accent-glow)` |
| Detailed stroke | `var(--accent-primary)` |
| Detailed label | `var(--text-primary)` |
| Edge arrows | `var(--accent-secondary)` |
| Background | `var(--bg-card)` |

#### Stage indicator

A small row of three labelled pills at the top of the component: **Skeleton · Blueprint · Detailed**. The active pill is filled (`var(--accent-primary)`); inactive pills are outlined and faded. This gives the user a clear "where am I" cue without disrupting the visual.

---

## 3 · Timeline Refinement (`Timeline.jsx`)

The current `Course Journey` timeline uses large 48×48px circle nodes with icons and multi-line text. The redesign makes it a minimal **dot-on-line** tracker to give visual breathing room for the new visualisation above it.

### Changes to `Timeline.jsx`

| Element | Current | After |
|---------|---------|-------|
| Node marker | 48px circle with icon | 10px filled dot |
| Completed dot | Accent-filled with `<CheckCircle2>` | Solid `var(--accent-primary)` dot |
| Active dot | White with `<Clock>` + glow | Slightly larger (14px) dot + pulse ring |
| Locked/upcoming dot | Empty `<Circle>` | `var(--bg-tertiary)` outlined dot, 10px |
| Icon imports | `Calendar, CheckCircle2, Circle, Clock` | None (remove icon imports entirely) |
| `.node-day` font-size | `0.95rem` | `0.72rem` |
| `.node-date` font-size | `0.75rem` | `0.62rem` |
| `.timeline-header` margin-bottom | `3.5rem` | `1.5rem` |
| `.timeline-track` padding | `2rem 1rem` | `1rem` |
| Node content | stacked Day + Date labels | Day label only (date removed or shown in tooltip) |
| Active glow dot | separate `<div>` | removed (pulse-ring on active node marker handles it) |

The result is a single horizontal line with small dots, labelled beneath with compact text. Hover tooltip (already exists) is preserved.

---

## 4 · Integration in `Dashboard.jsx` (and cloned `Visualisation.jsx`)

In `Dashboard.jsx`, the `Course Journey` section rendering order becomes:

```jsx
<Timeline currentDay={3} />         // ← thin dot-line (modified)
```

Becomes:

```jsx
<section className="course-journey-section">
  <OperatingModelVisualisation currentDay={3} />   {/* ← NEW, above timeline */}
  <Timeline currentDay={3} />                       {/* ← refined dot-line */}
</section>
```

The `currentDay` value can later be driven by app state; for now it is passed as a fixed prop matching the existing `Dashboard` usage.

The `.course-journey-section` wrapper just provides a small gap between the two sub-components:
```css
.course-journey-section { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem; }
```

---

## 5 · File Change Summary

| File | Change type | Notes |
|------|-------------|-------|
| `src/pages/Visualisation.jsx` | **NEW** | Clone of Dashboard with updated subtitle |
| `src/App.jsx` | MODIFY | Register `visualisation` route |
| `src/components/Header.jsx` | MODIFY | Add "Visualisation" menu item in drawer |
| `src/components/Timeline.jsx` | MODIFY | Thin dot-line style; reduced text sizes |
| `src/components/OperatingModelVisualisation.jsx` | **NEW** | Week-progressive SVG operating model component |
| `src/pages/Dashboard.jsx` | MODIFY | Import and render `OperatingModelVisualisation` above `<Timeline>`, wrapped in `.course-journey-section` |

---

## 6 · Verification Plan

### Manual (browser)

1. Run: `npm run dev` (already running on `localhost:5173` or equivalent)
2. **Hamburger menu** — Click the ☰ icon → confirm "Visualisation" item appears in the drawer under Main Views → click it → confirm the Visualisation page loads with same layout as Dashboard.
3. **Operating model — Week 1** — With `currentDay={1}` or `currentDay={2}`, confirm the visualisation renders skeleton (dashed outlines, no fill, no labels).
4. **Operating model — Week 2** — With `currentDay={3}` or `currentDay={4}`, confirm blueprint state (solid blue strokes, low-opacity fill, labels visible).
5. **Operating model — Week 3** — With `currentDay={5}` or `currentDay={6}`, confirm detailed state (richer fill, icons, stage pill shows "Detailed" active).
6. **Colour compliance** — All three stages must use only the blue palette tokens (no green, red, or other hues).
7. **Timeline** — Confirm nodes are small dots (not large circles), text is smaller, and hover tooltip still appears.
8. **Dark mode** — Toggle dark mode (moon icon in header); confirm all three visualisation states and the timeline remain legible and on-palette.
9. **Responsive** — Resize browser to < 768px (mobile); confirm visualisation and timeline don't overflow.
