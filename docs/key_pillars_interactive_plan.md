# Key Pillars — Interactive Infographic Plan

## Overview

This document outlines the plan for building an interactive infographic page that presents the **six Key Pillars** of AI Leadership strategy. Users can view all six pillars at a glance and navigate into each one to read its full description. The page will be integrated into the existing React/Vite app as a new page route (`pillars`) and linked from the Dashboard.

---

## The Six Pillars (Content)

| # | Pillar Name | Description |
|---|---|---|
| 1 | **Sensing & Environmental Intelligence** | Continuously monitors signals, risks, and opportunities from the external environment to inform decision-making. |
| 2 | **Articulation & Strategic Design** | Defines, unifies and articulates strategy across a holistic priority landscape in ways that are comprehensive yet easy to engage and navigate. |
| 3 | **Readiness & Blueprinting** | Understand and define your organisation's operating model and value chains. Understanding the key enablers like people, process and technology that are required and assess readiness to deliver against strategy. |
| 4 | **Mobilisation & Alignment** | Translate the strategic landscape and target operating models into a series of cascading plans that ensure accountability and optimise prioritisation of budgets and resources. |
| 5 | **Realisation & Delivery** | Govern strategic alignment and impact, track and assure delivery performance and enable capability improvement and benefits realisation. |
| 6 | **Continuous Intelligence** | Introduce models to effectively manage how intelligence—human, artificial, and hybrid—is embedded, learned from, and refined across the enterprise. The goal is to build a self-learning organisation where strategy, execution, and insight continuously reinforce one another. |

---

## UI / UX Design

### Layout — Overview State (Landing)

The page opens with a **hub-and-spoke** or **hexagonal honeycomb** diagram of the 6 pillars. Each pillar is a visually distinct card/node.

```
┌──────────────────────────────────────────────────────────────┐
│  Key Pillars                          [back to Dashboard]    │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│   ① Sensing &          ② Articulation &    ③ Readiness &    │
│   Environmental        Strategic Design    Blueprinting      │
│   Intelligence         [card]              [card]            │
│   [card]                                                     │
│                                                              │
│   ④ Mobilisation &     ⑤ Realisation &     ⑥ Continuous     │
│   Alignment            Delivery            Intelligence      │
│   [card]               [card]              [card]            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- **2×3 grid** by default (two rows of three cards), responsive to a single column on mobile.
- Each pillar card shows:
  - A numbered badge (①–⑥) using a unique accent colour per pillar
  - The **pillar title** in bold
  - A **one-line teaser** (first sentence of the description)
  - A subtle **"Explore →"** affordance on hover

### Colour Palette (one accent per pillar)

| Pillar | Accent Colour |
|---|---|
| Sensing & Environmental Intelligence | `#6366f1` (indigo) |
| Articulation & Strategic Design | `#0ea5e9` (sky blue) |
| Readiness & Blueprinting | `#f59e0b` (amber) |
| Mobilisation & Alignment | `#10b981` (emerald) |
| Realisation & Delivery | `#f43f5e` (rose) |
| Continuous Intelligence | `#a855f7` (purple) |

### Interaction — Detail State

When a user clicks a pillar card:

1. The clicked card **expands** in-place (or a modal/drawer slides in from the right) with the **full description**, without navigating away from the page.
2. The other five cards **dim** slightly to communicate focus.
3. A **close / back** affordance (×) collapses back to the overview.

**Preferred interaction pattern:** A right-side **detail panel** that slides in, keeping all six pillars visible in a narrower left column. This allows the user to switch between pillars without closing and re-opening.

```
┌────────────────────────────┬─────────────────────────────────┐
│  ① Sensing [selected]      │  PILLAR DETAIL                  │
│  ─────────────────────     │  ─────────────────────────────  │
│  ② Articulation            │  Sensing & Environmental         │
│  ─────────────────────     │  Intelligence                   │
│  ③ Readiness               │                                 │
│  ─────────────────────     │  Continuously monitors signals, │
│  ④ Mobilisation            │  risks, and opportunities from  │
│  ─────────────────────     │  the external environment to    │
│  ⑤ Realisation             │  inform decision-making.        │
│  ─────────────────────     │                                 │
│  ⑥ Continuous Intelligence │                          [×]    │
└────────────────────────────┴─────────────────────────────────┘
```

### Animations & Micro-interactions

- **Entry animation:** Cards stagger-fade in (each card 80ms offset) when the page loads.
- **Hover:** Card lifts (`translateY(-6px)`) with a soft coloured glow matching the pillar accent.
- **Selection:** Smooth CSS transition for the panel slide-in; selected card gets an accent-coloured left border.
- **Deselection:** Panel slides out; cards return to full opacity.

---

## Component Architecture

### New Files

| File | Purpose |
|---|---|
| `src/pages/KeyPillars.jsx` | Top-level page wrapper, owns selected pillar state |
| `src/components/PillarHub.jsx` | Renders the 2×3 grid of pillar overview cards |
| `src/components/PillarDetailPanel.jsx` | Sliding right panel; receives the selected pillar object as a prop |

### Modified Files

| File | Change |
|---|---|
| `src/App.jsx` | Add `'pillars'` to the `currentPage` switch and import `KeyPillars` |
| `src/pages/Dashboard.jsx` | Add a **"Key Pillars"** entry card / CTA button that routes to `pillars` |

### Data

A single `PILLARS_DATA` constant array (defined inside `KeyPillars.jsx` or a separate `src/data/pillars.js` file) holds all pillar objects:

```js
// src/data/pillars.js (example shape)
export const PILLARS_DATA = [
  {
    id: 'sensing',
    number: 1,
    title: 'Sensing & Environmental Intelligence',
    teaser: 'Continuously monitors signals, risks, and opportunities...',
    description: 'Full paragraph text here...',
    color: '#6366f1',
  },
  // ...5 more
];
```

---

## Page States & Behaviour

| State | Description |
|---|---|
| **Overview** | All 6 cards visible in 2×3 grid. No pillar selected. |
| **Detail** | Left column narrows to show 6 compact cards (title + number only). Right panel slides in with full content of the selected pillar. |
| **Hover** | Individual card lifts and glows. |
| **Keyboard / Accessibility** | Cards are focusable (`tabIndex={0}`); Enter/Space opens the detail panel; Escape closes it; Arrow keys cycle through pillars. |

---

## Responsive Behaviour

| Breakpoint | Layout |
|---|---|
| Desktop `>1024px` | 2×3 grid overview; split left-list / right-panel in detail state |
| Tablet `768–1024px` | 2×3 grid overview; detail state uses a full-width bottom drawer instead of side panel |
| Mobile `<768px` | Single column stack; tapping a card opens a full-screen modal for the detail |

---

## Integration with Existing App

- The `Header` navigation will have a **"Pillars"** link added alongside Learn / Think / Build.
- The Dashboard's pillars section (the existing 3-card grid for Learn / Think / Build) remains untouched — the Key Pillars page is a **separate, dedicated view**.
- Theme support (light/dark) is inherited from the existing `ThemeContext`.

---

## Verification Checklist (Post-Implementation)

- [ ] All 6 pillars render correctly with the right content and accent colours
- [ ] Clicking a pillar opens the detail panel with the correct full description
- [ ] Clicking another pillar switches the detail panel content without closing it
- [ ] Close (×) returns to the full overview grid
- [ ] Stagger animation plays on initial load
- [ ] Hover effect (lift + glow) works on all cards
- [ ] Keyboard navigation (Tab, Enter, Escape, Arrow keys) works correctly
- [ ] Page is accessible on all three breakpoints (desktop, tablet, mobile)
- [ ] Light and dark themes apply correctly
- [ ] Route (`pillars`) is reachable from both the Header nav and the Dashboard
