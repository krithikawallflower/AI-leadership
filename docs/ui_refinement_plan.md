# UI Refinement Plan — Sleek, Minimal, Presentation-Ready

## Overview

The goal is to unify all screens under a refined, minimal aesthetic:
- **Dual-blue colour palette** — replace the current multi-colour system (indigo, violet, amber, emerald, red) with two deliberate blue tones.
- **Lighter font weights** — reduce the heavy `font-weight: 700 / 800` usage across headings, labels, and tags for a less blocky, more editorial feel.
- **Subtle card shadows** — add a consistent, soft box-shadow to every card surface so elements lift off the page without feeling dramatic.
- **Overall feel** — polished, presentation-ready, more like a refined product than a prototype.

---

## 1. Design Token Changes — `src/index.css`

This is the ground-truth layer. Every other change flows from here.

### Colour Palette

Replace the current multi-colour palette with **two blue shades** plus neutral supporting tokens:

| Token | Current value | Proposed value | Role |
|---|---|---|---|
| `--accent-primary` | `#6366f1` (indigo) | `#1d4ed8` | Primary blue — active states, CTAs, progress |
| `--accent-secondary` | `#8b5cf6` (violet) | `#60a5fa` | Light blue — hover tints, tags, gradients |
| `--accent-primary-20` | `rgba(99,102,241,0.2)` | `rgba(29,78,216,0.1)` | Low-opacity tint for backgrounds |
| `--accent-glow` | `rgba(99,102,241,0.15)` | `rgba(29,78,216,0.08)` | Subtle glow for active nodes |
| `--accent-ta` | `#10b981` (green) | `#93c5fd` | TA sidebar accent → light blue |
| `--accent-ta-glow` | `rgba(16,185,129,0.15)` | `rgba(147,197,253,0.15)` | TA glow → blue |

> Dark mode variants of the above two blues:
> - Primary dark: `#3b82f6`
> - Secondary dark: `#93c5fd`

### Card Shadow

Define a new, refined shadow token used on **all** card surfaces:

```css
--card-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--card-shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05);
```

(Dark mode equivalents use slightly stronger opacity: `0.18` / `0.12`.)

### Typography Weights

Change the global heading default and body label weight:

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 400; /* was 600 — let Outfit's form do the work */
}
```

Individual overrides where weight is hard-coded are listed per-file below.

---

## 2. Per-File Changes

### `src/components/Header.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.logo-text` font-weight | `700` | `500` |
| `.drawer-title` font-weight | `700` | `500` |
| `.section-label` font-weight | `700` | `500` |
| `.item-title` font-weight | `600` | `400` |
| `.menu-item.active` border/bg | indigo tint | primary-blue tint (via token) |

No structural changes — CSS token swap + weight reduction only.

---

### `src/pages/Dashboard.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.hero-title` font-size / weight | `3rem`, implicit `600` | `3rem`, `300` (thin, editorial) |
| `.next-date` font-weight | `700` | `500` |
| `.next-label` font-weight | `600` | `400` |
| `.next-session-card` border-left color | accent-primary (indigo) | `--accent-primary` (blue) |
| `.next-session-card` box-shadow | none | `var(--card-shadow)` |
| `.prep-btn` font-weight | `600` | `400` |
| PillarCard icon colors | `#6366f1`, `#f59e0b`, `#10b981` | All replaced → see `PillarCard.jsx` below |

---

### `src/components/PillarCard.jsx`

Currently each pillar receives a hard-coded `color` prop (`#6366f1`, `#f59e0b`, `#10b981`). These colours are set in `Dashboard.jsx`.

**Changes in `Dashboard.jsx` data array:**
- Learn → `color: 'var(--accent-primary)'` (primary blue)
- Think → `color: 'var(--accent-secondary)'` (light blue)
- Build → `color: 'var(--accent-primary)'` (primary blue)

**Changes in `PillarCard.jsx` styles:**
| Element | Current | Proposed |
|---|---|---|
| `.pillar-card` box-shadow | none by default | `var(--card-shadow)` always on |
| `.pillar-card:hover` box-shadow | large shadow | `var(--card-shadow-hover)` |
| `.card-title` font-weight | `700` | `500` |
| `.card-status` font-weight | `600` | `400` |

---

### `src/components/Timeline.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.timeline-container` box-shadow | `var(--card-shadow)` (old token) | updated `var(--card-shadow)` (new subtle token) |
| `.timeline-progress` gradient | indigo → violet | `--accent-primary` → `--accent-secondary` (both blues) |
| `.timeline-title` font-weight | `700` | `500` |
| `.timeline-badge` color | `var(--accent-glow)` bg | updated token (blue tint) |
| `.node-day` font-weight | `700` | `500` |
| Completed node background | indigo fill | `--accent-primary` (blue fill) — token change covers this |

---

### `src/pages/Learn.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.page-title` font-weight | via global h1 `600` | `300` via h1 override |
| `.day-title` border-left color | `var(--accent-primary)` | stays (token updated to blue) |
| `.day-title` font-weight | `700` | `500` |
| `.material-title` font-weight | `700` | `500` |
| `.material-meta` font-weight | `600` | `400` |
| `.material-card` box-shadow | none (only on hover) | `var(--card-shadow)` always on |
| Icon box colors | `.presentation` → `#e0e7ff / #4338ca`, `.note` → amber, `.preread` → green | Replace with blue tints: all use blue-50/blue-700 variants or opacity of `--accent-primary` |

**Specific icon box replacements:**
```css
.presentation { background: rgba(29,78,216,0.08); color: var(--accent-primary); }
.pillars      { background: rgba(29,78,216,0.08); color: var(--accent-primary); }
.note         { background: rgba(96,165,250,0.12); color: var(--accent-secondary); }
.preread      { background: rgba(29,78,216,0.06); color: var(--accent-primary); }
```

---

### `src/pages/Think.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.activity-title` font-weight | `700` | `500` |
| `.activity-icon-container` bg | `var(--accent-glow)` indigo tint | `var(--accent-glow)` blue tint (token update covers) |
| `.tag.high` | red bg/text | `rgba(29,78,216,0.1)` bg, `var(--accent-primary)` text |
| `.tag.medium` | amber bg/text | `rgba(96,165,250,0.12)` bg, `var(--accent-secondary)` text |
| `.tag` font-weight | `700` | `500` |
| `.workspace-btn` bg | `var(--accent-primary)` indigo | `var(--accent-primary)` blue (token update) |
| `.workspace-btn:hover` bg | `var(--accent-secondary)` violet | `var(--accent-secondary)` light-blue (token update) |
| `.date-badge.due` color | `var(--accent-secondary)` violet | `var(--accent-secondary)` light-blue (token update) |
| `.activity-item` box-shadow | none | `var(--card-shadow)` always on |
| `.new-framework-card` border | `2px dashed border-color` | stays, but add `var(--card-shadow)` |

---

### `src/pages/Build.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.brief-title` font-weight | `700` | `500` |
| `.outcomes-title` font-weight | `700` | `500` |
| `.difficulty-badge` font-weight | `800` | `500` |
| `.simulator-link-btn` font-weight | `700` | `500` |
| `.brief-card` box-shadow | none (only on hover) | `var(--card-shadow)` always on |
| `.brief-card:hover` box-shadow | heavy `0 25px 50px` | `var(--card-shadow-hover)` |
| `.check-icon` color | hard-coded `#10b981` green | `var(--accent-secondary)` light-blue |
| `brief.color` props (Shield, Zap) | `#6366f1`, `#10b981` | Both → `var(--accent-primary)` / `var(--accent-secondary)` as CSS vars or hex equivalents `#1d4ed8`, `#60a5fa` |
| `.rocket-icon` color | `var(--accent-primary)` | stays (token update covers) |
| `.build-hero` title weight | via h1 `600` | `300` via override |

---

### `src/pages/TeachingAssistant.jsx`

| Element | Current | Proposed |
|---|---|---|
| `.page-title` font-size / weight | `2.5rem`, implicit `600` | `2.5rem`, `300` via h1 |
| `.page-subtitle` color | `var(--text-secondary)` | stays |
| `.export-btn` font-weight | `600` | `400` |

---

### `src/components/ta/` (TA Sub-components)

The TA components (`ActivityCard`, `ActivityFeed`, `TAPulseSidebar`, `AskTAInput`, `InteractiveWorkspace`, `NextBestActions`, `ReflectionPrompt`, `StrategyDotZeroPanel`, `SplitViewToggle`, `TAAnnouncement`, `ContextBadge`, `TheorySnippet`) use the TA-specific tokens (`--accent-ta`, `--accent-ta-glow`) for their green highlights and progress rings.

**Changes:**
- `--accent-ta` updated to `#93c5fd` (light blue) in `index.css` — all TA components inherit automatically with no per-file changes needed.
- Any hard-coded green hex values (e.g., `#10b981`) found in TA components should be replaced with `var(--accent-ta)`.
- Card-like surfaces inside TA components (e.g., workspace cards, reflection cards) should receive `box-shadow: var(--card-shadow)`.
- Font-weight `700` / `600` reductions to `500` / `400` where found.

> **Audit needed at implementation time**: scan all 12 TA component files for hard-coded colour values and `font-weight: 700` before editing.

---

## 3. `gradient-text` Utility

Currently `background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`.

With the two-blue palette this becomes a gradient from primary blue to light blue — same CSS, no change needed beyond the token values.

---

## 4. Files to Change — Summary

| File | Change type |
|---|---|
| `src/index.css` | Token updates (colours, shadows, headline weight) |
| `src/components/Header.jsx` | Font-weight reductions |
| `src/pages/Dashboard.jsx` | Pillar colours, weight, card shadow |
| `src/components/PillarCard.jsx` | Shadow always-on, weight reductions |
| `src/components/Timeline.jsx` | Weight, gradient colours (via token) |
| `src/pages/Learn.jsx` | Icon box colours, weight, shadow always-on |
| `src/pages/Think.jsx` | Tag colours, weight, activity-item shadow |
| `src/pages/Build.jsx` | Icon/check colours, weight, shadow refinement |
| `src/pages/TeachingAssistant.jsx` | Weight reductions |
| `src/components/ta/*.jsx` (12 files) | Hard-coded green → blue token, weight reductions, shadow on cards |

**Total files:** ~21

---

## 5. What Is NOT Changing

- Layout structure, grid systems, and spacing tokens — unchanged.
- Dark mode support — all token changes apply equally to both `[data-theme='dark']` and light.
- Font families (`Inter`, `Outfit`) — unchanged.
- Animation and transition logic — unchanged.
- Component functionality and data — unchanged.
