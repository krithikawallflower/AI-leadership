# Intelligent Orchestration Framework — Hexagonal Iris Infographic Plan

## Overview

This page presents the **Intelligent Orchestration Framework** as a visually stunning, interactive **Hexagonal Iris** diagram. Rather than a card list, the six pillars are positioned as nodes around a pulsing central "Digital Twin" hub. Animated data-streams flow between pillars and hub to communicate the idea of a *continuously learning system*. The view will be accessible from the **Learn tab** as a second lesson card: **"Key Pillars — Option 2"**.

---

## The Six Pillars (Content)

| Node | Pillar Name | Description |
|---|---|---|
| 1 | **Sensing & Environmental Intelligence** | Continuously monitors signals, risks, and opportunities from the external environment to inform decision-making. |
| 2 | **Articulation & Strategic Design** | Defines, unifies and articulates strategy across a holistic priority landscape and in ways that are comprehensive yet easy to engage and navigate. |
| 3 | **Readiness & Blueprinting** | Understand and define your organisations operating model and value chains. Understanding the key enablers like people, process and technology... and assess readiness to deliver against strategy. |
| 4 | **Mobilisation & Alignment** | Translate the strategic landscape and target operating models into a series of cascading plans that ensure accountability and optimise prioritisation of budgets and resources. |
| 5 | **Realisation & Delivery** | Govern strategic alignment and impact, track and assure delivery performance and enable capability improvement and benefits realisation. |
| 6 | **Continuous Intelligence** | Introduce models to effectively manage how intelligence—human, artificial, and hybrid—is embedded, learned from, and refined across the enterprise. |

---

## Visual Configuration

### Layout

The entire infographic is rendered on an **SVG + DOM hybrid canvas**. The six pillar nodes are evenly spaced at 60° intervals around the central hub, forming a perfect hexagon.

```
                   ① Sensing
                  /          \
⑥ Continuous  ←            → ② Articulation
       |          [ Digital ]        |
⑤ Realisation ←    Twin    → ③ Readiness
                  \          /
                ④ Mobilisation
```

### Central Hub — "Digital Twin" Core

- A circular element with a **radial pulsing animation** (concentric rings that ripple outward on loop).
- **Default state:** Shows the label "Digital Twin" with a subtle tagline "Intelligent Orchestration Framework".
- **Selected state:** Text inside the hub "dissolves and reforms" to show the selected pillar's full description (crossfade transition, ~300ms opacity out → in).
- Hub border glows with the accent colour of the currently selected pillar.

### Pillar Nodes

Each node is a **hexagonal badge** with:
- A numbered badge (①–⑥)
- The pillar title (short, wrapping at 2 lines)
- A unique **accent colour**

| Pillar | Accent Colour |
|---|---|
| Sensing & Environmental Intelligence | `#6366f1` (indigo) |
| Articulation & Strategic Design | `#0ea5e9` (sky blue) |
| Readiness & Blueprinting | `#f59e0b` (amber) |
| Mobilisation & Alignment | `#10b981` (emerald) |
| Realisation & Delivery | `#f43f5e` (rose) |
| Continuous Intelligence | `#a855f7` (purple) |

### Flow Lines — Animated Data Streams

- **12 line segments** connect all nodes to the hub (one in, one out per node).
- Additional **6 curved arcs** connect adjacent pillar nodes around the hexagon perimeter.
- Animation: Small **glowing dots** travel along paths at varying speeds using CSS `stroke-dashoffset` animation or a `motion-path` approach.
- Lines are `1.5px` wide SVG paths; dots are `4px` circles in the matching pillar colour.

---

## Interactive Logic — The "Layered Reveal"

### Default State

- All six nodes are **semi-translucent** (`opacity: 0.65`).
- Node labels are fully visible.
- All flow lines animate at a **low-opacity baseline** (`opacity: 0.25`).
- Hub shows the framework title and a prompt: *"Select a pillar to explore."*

### Selected State (Hover / Tap)

When a user clicks or hovers a node:

1. **Selected node** → `opacity: 1`, subtle scale-up (`scale: 1.08`), node border glows with its accent colour.
2. **All other nodes** → dim to `opacity: 0.3`.
3. **Connected flow lines** to/from the selected node → brighten (`opacity: 1`), data stream animation speeds up.
4. **Hub** → border colour transitions to match selected pillar accent. Text inside dissolves (fade out), then reforms (fade in) with the pillar's full description text.

### Interdependence Indicator

When **Sensing (node 1)** is selected:
- The path connecting Sensing → Articulation is **highlighted with a distinct arrow-head and a faster pulse**, visually showing the direct downstream relationship.
- A small label: *"Informs → Articulation & Strategic Design"* appears along the highlighted arc.

This relationship is hardcoded for the Sensing node as a demonstration of causal dependency.

---

## UX Transitions

### "Dissolve and Reform" — Hub Text

- **Phase 1 (200ms):** Current text opacity animates to `0` with a slight `blur(4px)` filter.
- **Phase 2 (100ms):** Text content swaps.
- **Phase 3 (200ms):** New text opacity animates to `1`, `blur(0)` — giving the impression of reformation.

### "Full System View" Toggle

A **floating button** fixed to the bottom-right of the canvas: `▶ Full System View`.

On click:
1. All nodes and lines highlight in sequence, starting from node ①.
2. A glowing **pulse wave** animates outward from node 1 → hub → node 2 → hub → … → node 6, completing a full loop.
3. Timing: Each step is ~600ms, total sequence duration ~4 seconds.
4. After completion, all nodes remain at `opacity: 1` briefly, then return to default state.
5. Button label changes during animation to `⏹ Stop`.

---

## Component Architecture

### New Files

| File | Purpose |
|---|---|
| `src/pages/KeyPillarsHex.jsx` | Top-level page wrapper; owns selected pillar state and Full System View toggle |
| `src/components/HexCanvas.jsx` | SVG + DOM canvas; renders the hexagonal layout, nodes, hub, and flow lines |
| `src/components/HexNode.jsx` | Individual pillar hexagonal node (receives pillar data, selected state, and onClick) |
| `src/components/HexHub.jsx` | Central Digital Twin hub with the dissolve-reform text animation |
| `src/components/FlowLines.jsx` | Animated SVG paths between nodes and hub |

Data is reused from the existing `src/data/pillars.js` — no duplication needed.

### Modified Files

| File | Change |
|---|---|
| `src/pages/Learn.jsx` | Add a **second card** titled "Key Pillars — Option 2" that navigates to `page: 'pillars-hex'` |
| `src/App.jsx` | Add `'pillars-hex'` case routing to `<KeyPillarsHex />` |

---

## Responsive Behaviour

| Breakpoint | Layout |
|---|---|
| Desktop `>1024px` | Full hexagonal SVG canvas, all labels visible inline |
| Tablet `768–1024px` | Canvas scales down via `viewBox`; labels rendered as tooltips on hover instead of inline |
| Mobile `<768px` | Hexagonal layout replaced with a vertical **accordion-style** list with the same dissolved-text animation in a top info panel |

---

## Accessibility

- All nodes are `focusable` (`tabIndex={0}`) and respond to `Enter` / `Space`.
- `Arrow` keys cycle through nodes in numeric order.
- `Escape` deselects any active node.
- Hub content is written to an ARIA live region (`aria-live="polite"`) so screen readers announce when the description changes.

---

## Verification Checklist (Post-Implementation)

- [ ] Hexagonal layout renders with correct 60° spacing for all 6 nodes
- [ ] Central hub pulses on load in default state
- [ ] Clicking each node correctly dissolves and reforms hub text with the right description
- [ ] Dimming of non-selected nodes functions correctly
- [ ] Flow line animations accelerate on node selection
- [ ] Sensing → Articulation interdependence path highlights when node 1 is selected
- [ ] "Full System View" pulse animation traverses all 6 nodes in order
- [ ] "Back to Learn" navigation works
- [ ] New "Key Pillars — Option 2" card appears in the Learn tab
- [ ] Responsive behaviour: accordion layout renders on mobile
- [ ] Keyboard navigation (Tab, Enter, Escape, Arrow keys) is fully functional
