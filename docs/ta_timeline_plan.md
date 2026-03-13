# TA Course Timeline — Implementation Plan

## Overview

This plan covers the addition of a **horizontal, inline timeline** to the top of `TeachingAssistant.jsx`. The timeline replaces the current page title area and provides a persistent, at-a-glance view of the student's position in the course journey. Days are driven directly by the `courseSchedule` array in `courseConfig.js` and the `activeDayIndex` state already managed in `TeachingAssistant.jsx`.

---

## 1. What Exists Today

| Item | Location | Note |
|---|---|---|
| `activeDayIndex` state | `TeachingAssistant.jsx` | Controls which day's feed is shown |
| `courseSchedule` array | `src/data/courseConfig.js` | Has `dayLabel`, `theme` per day |
| `core-header` section | `TeachingAssistant.jsx` | Current title + action buttons area |
| Dashboard Timeline | `src/components/Timeline.jsx` | Existing styled timeline, different scope |

The new TA timeline is a **distinct, purpose-built component** — not a reuse of `Timeline.jsx`. It is more compact, horizontal, and semantically tied to the TA's course data.

---

## 2. Visual Design

### Layout

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  COURSE TIMELINE (full-width banner, sits below the page title, above the feed) │
│                                                                                   │
│  ●────────────────●──────────●  ──  ○  ──  ○  ──  ○                             │
│  W1·Day1  W1·Day2  W2·Day1▼  W2·Day2  W3·Day1  W3·Day2                          │
│  Completed Completed (Active) (Locked) (Locked) (Locked)                         │
└────────────────────────────────────────────────────────────────────────────────┘
```

- **Full-width** inside the `conversational-core` column, max-width 800px (matching the feed's max-width).
- **Horizontal track** — a thin line connecting all day nodes left to right.
- **Progress fill** — the track fills with the accent gradient up to and including the active node.
- **Compact height** — the component should feel like a status bar, not a full section. Recommended total height: ~80–90px.

### Node States

| State | Condition | Visual Treatment |
|---|---|---|
| **Completed** | `dayIndex < activeDayIndex` | Filled circle, accent colour, checkmark icon |
| **Active** | `dayIndex === activeDayIndex` | Pulsing ring + bold label + glowing node |
| **Locked** | `dayIndex > activeDayIndex` | Hollow circle, muted colour, lock icon, no click |

### Locked Node Detail
- Locked nodes render with `color: var(--accent-locked)`.
- A small lock icon sits inside the node marker (Lucide `Lock` icon, 12px).
- The day label text below is also muted (`var(--text-tertiary)`).
- Hovering a locked node shows a small tooltip: *"Unlock after completing [previous day's theme]"*.

### Active Node Pulse Effect
- A breathing ring animation (`box-shadow` pulsing) on the active node's ring border, using `--accent-primary` with opacity animation.

---

## 3. Data Model Changes

### 3.1 Extend `courseSchedule` in `courseConfig.js`

Each day entry should get two new optional fields to support the full 6-day course journey:

```js
{
  dayId: 1,
  dayLabel: "Weekend 1, Day 1",      // Short label for the node (e.g. "W1 · D1")
  nodeLabel: "W1 · D1",              // Compact label shown under the node
  theme: "Introducing the Framework",
  ...
}
```

The `nodeLabel` field is a compact 6–7 character version of `dayLabel` for display in the timeline. The full `theme` is used in the tooltip.

### 3.2 Expand `courseSchedule` to all 6 days

Currently only 2 days are defined. The array should be expanded to 6 entries with:
- **Days 1–2** (Weekend 1) — both locked relative to the current active index.
- **Day 3** (Weekend 2, Day 1, `dayId: 3`) — this is the current active day.
- **Days 4–6** — locked.

This makes the timeline meaningful and accurate.

> Example expansion (only metadata required — cards array can be empty `[]` for days not yet authored):
> ```js
> { dayId: 3, dayLabel: "Weekend 2, Day 1", nodeLabel: "W2 · D1", theme: "Designing the Ecosystem", cards: [...] },
> { dayId: 4, dayLabel: "Weekend 2, Day 2", nodeLabel: "W2 · D2", theme: "AI Ethics & Change Management", cards: [...] },
> { dayId: 5, dayLabel: "Weekend 3, Day 1", nodeLabel: "W3 · D1", theme: "Scaling & Governance", cards: [] },
> { dayId: 6, dayLabel: "Weekend 3, Day 2", nodeLabel: "W3 · D2", theme: "Final Validation", cards: [] },
> ```

The `activeDayIndex` (0-indexed) in `TeachingAssistant.jsx` indicates the current position in this array. For the scenario "Weekend 2, Day 1", `activeDayIndex` should default to `2`.

---

## 4. Component Plan

### 4.1 New File: `src/components/ta/CourseTimeline.jsx`

A self-contained component. It accepts:

| Prop | Type | Description |
|---|---|---|
| `days` | `array` | The full `courseSchedule` array |
| `activeDayIndex` | `number` | 0-indexed currently active day |
| `onDaySelect` | `func` | Optional — called when a completed day is clicked (for future navigation) |

#### Internal Structure

```
<div className="course-timeline">
  <div className="timeline-header">
    <span>Course Journey</span>
    <span className="active-label">Weekend 2, Day 1 · Designing the Ecosystem</span>
  </div>
  <div className="timeline-track">
    <div className="track-line">
      <div className="track-fill" style={{ width: `<fill %>`}} />
    </div>
    <div className="nodes-row">
      {days.map(day => <TimelineNode ... />)}
    </div>
  </div>
</div>
```

#### Fill Width Calculation

```
fillPercent = (activeDayIndex / (days.length - 1)) * 100
```

This fills the track up to the centre of the active node.

#### Node Tooltip (on hover)

- Completed: `"Day complete — click to review"`
- Active: `"You are here: [theme]"`
- Locked: `"Unlocks after completing [prev day theme]"`

---

### 4.2 Placement in `TeachingAssistant.jsx`

The `<CourseTimeline>` is inserted **between the `core-header` and the `<ActivityFeed>`**, within the `conversational-core` div. It should be constrained to `max-width: 800px; margin: 0 auto` to align with the feed cards.

```jsx
{/* existing header */}
<header className="core-header">...</header>

{/* NEW — insert here */}
<CourseTimeline
  days={courseSchedule}
  activeDayIndex={activeDayIndex}
  onDaySelect={(index) => setActiveDayIndex(index)}
/>

{/* existing feed */}
<ActivityFeed ... />
```

---

## 5. Animation & Motion

| Element | Effect |
|---|---|
| **Track fill** | `width` CSS transition, 700ms, `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight spring) |
| **Active node ring** | `@keyframes pulse-ring` — expands and fades `box-shadow` outward, 2s infinite |
| **Locked node hover** | Slight `scale(1.05)` and tooltip fade-in over 150ms |
| **Completed node** | Static — no animation needed |

```css
@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0 rgba(var(--accent-primary-rgb), 0.4); }
  70%  { box-shadow: 0 0 0 8px rgba(var(--accent-primary-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--accent-primary-rgb), 0); }
}
```

---

## 6. Files to Create / Modify

| File | Action | Change |
|---|---|---|
| `src/components/ta/CourseTimeline.jsx` | **[NEW]** | Full timeline component with nodes, fill-track, tooltips |
| `src/data/courseConfig.js` | **[MODIFY]** | Expand to 6 days, add `nodeLabel` field, set default `activeDayIndex` to 2 |
| `src/pages/TeachingAssistant.jsx` | **[MODIFY]** | Import and render `<CourseTimeline>` between header and feed; update default `activeDayIndex` to 2 |

---

## 7. Out of Scope

- Clicking a **locked** day to navigate into it (locked nodes are non-interactive).
- Vertical timeline variant (always horizontal for this view).
- Auto-advancing the timeline on a real clock (admin toggle remains the mechanism).
