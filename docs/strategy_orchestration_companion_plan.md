# Strategy Orchestration — Course Companion: Implementation Plan

## Overview

This document defines the full specification for a new **"Teaching Assistant" view** within the existing Student Companion application. The view is purpose-built for the *Strategy Orchestration* Executive MBA course and embodies a **Digital Teaching Assistant (TA)** mental model — a proactive, supportive guide that bridges classroom theory with the StrategyDotZero orchestration tool.

In parallel, the top navigation (`Header.jsx`) is extended with a **hamburger menu**, and routing is updated so that the current Dashboard is mapped to **"Textbook"** and the new view maps to **"Teaching Assistant"**.

---

## 1. Navigation Changes — `Header.jsx`

### Current State
The header renders a flat list of nav links: `Dashboard`, `Learn`, `Think`, `Build`. There is no grouping or overflow menu.

### Planned Changes

#### 1.1 Hamburger Menu
- Add a **hamburger icon button** (☰) on the left side of the header, just to the right of the logo.
- On click, it toggles a **slide-in side-drawer** (or an inline dropdown) with the primary navigation items.
- The existing inline nav links (`Learn`, `Think`, `Build`) will remain visible on desktop for quick access but will also be represented inside the menu.
- The hamburger menu will contain two **top-level course items**:

| Menu Item | Routes To | Description |
|---|---|---|
| 📗 **Textbook** | `dashboard` (existing) | The current Dashboard landing page |
| 🤖 **Teaching Assistant** | `teaching-assistant` (new) | The new Strategy Orchestration companion |

- The active menu item is highlighted with a left-border accent stripe.

#### 1.2 App Routing (`App.jsx`)
A new case is added to the `renderPage` switch:
```
case 'teaching-assistant': return <TeachingAssistant />;
```

A new `TeachingAssistant` page component is created at:
```
src/pages/TeachingAssistant.jsx
```

---

## 2. New Page — `TeachingAssistant.jsx`

The page is divided into **two primary zones** plus an optional **split-view overlay**:

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER (sticky, unchanged)                                  │
├────────────────────────────────────────┬─────────────────────┤
│                                        │                     │
│  CONVERSATIONAL CORE  (left / center)  │  TA PULSE SIDEBAR   │
│  ~70% width                            │  ~30% width         │
│                                        │                     │
│  [Activity Feed — scrollable]          │  [Context Badge]    │
│  [Theory Snippets]                     │  [Next Best Actions]│
│  [Interactive Workspaces]              │  [Ask the TA input] │
│                                        │                     │
└────────────────────────────────────────┴─────────────────────┘
│  SPLIT-VIEW OVERLAY (toggled, slides in from right)          │
└──────────────────────────────────────────────────────────────┘
```

### 2.1 Conversational Core (Left / Centre Panel)

The core zone renders a **vertical Activity Feed** — styled like a premium, high-contrast messaging thread.

#### Activity Card Types

Each card is a distinct styled component rendered in sequence:

| Card Type | Description |
|---|---|
| **Theory Snippet** | Collapsible visual summary card. Contains a headline, 2–3 bullet takeaways, and a diagram placeholder (icon or SVG illustration). Used for frameworks like "Intelligent Orchestration Framework" and "Systems Thinking". |
| **Interactive Workspace** | An embedded, fillable canvas inside a card. Includes labelled text fields, tag inputs, or structured tables (e.g., "Structural vs. Behavioural Change" table). |
| **Reflection Prompt** | Appears inline beneath an Interactive Workspace after a student enters content. Styled as a TA "reply" bubble — indented, with a distinct accent colour. |
| **TA Announcement** | A full-width banner card used to mark course milestones or unlock messages (e.g., "Day 2 content is now available"). |

#### Activity Feed — Example Sequence (Weekend 2, Day 1)

1. `[TA Announcement]` — "Welcome to Weekend 2. Today's focus: Designing the Ecosystem."
2. `[Theory Snippet]` — "The Intelligent Orchestration Framework"
3. `[Interactive Workspace]` — "List your Strategic Tension Points" (free-text field, supports up to 6 entries)
4. `[Reflection Prompt]` — (triggered after ≥3 entries): "You've listed 3 symptoms — can you group these into a single systemic tension like 'Speed vs. Quality'?"
5. `[Theory Snippet]` — "Systems Thinking: Feedback Loops"
6. `[Interactive Workspace]` — "Structural vs. Behavioural Change" (2-column fillable table: Structural | Behavioural)
7. `[Interactive Workspace]` — "Friction Points in Your Organisation" (tag-style input)
8. `[Reflection Prompt]` — (triggered after ≥2 friction entries)
9. `[TA Announcement]` — (time-gated) "Change Management module unlocked. Scroll to continue."
10. `[Theory Snippet]` — "AI Ethics in Orchestration"

#### Progressive Disclosure
- Each card has a **`locked` state** (greyed-out, no interaction) and an **`unlocked` state** (fully interactive).
- Cards are unlocked either:
  - **Automatically**, after a prior Interactive Workspace has at least one entry saved.
  - **By admin trigger**, via the time-gating mechanism (see §4.2).
- Locked cards show a padlock icon and the label: *"Complete the previous activity to unlock."*
- Unlocking is animated: the card fades in and slides up from 12px below.

---

### 2.2 TA Pulse Sidebar (Right Panel)

A persistent, narrow sidebar (~300px) fixed to the right edge of the page.

#### Context Indicator
- Displays the current **course day badge** as a pill chip at the top.
    - Example: `Weekend 2, Day 1: Designing the Ecosystem`
- Below this, a compact course progress bar shows how many activity cards have been completed vs. total for the current day.

#### Next Best Action Checklist
- A vertically stacked checklist of 3–6 actionable items.
- Each item has:
  - A checkbox (can be toggled by the student)
  - A short action label (e.g., "Link your 5 strategic themes to the orchestration tool")
  - An optional tag like `🔗 In StrategyDotZero` for cross-tool tasks
- Items update reactively as the student completes activity cards in the core feed.
- Completed items are struck through and moved to the bottom of the list with reduced opacity.

#### "Ask the TA" Quick-Input
- A compact text input anchored to the **bottom of the sidebar**.
- Placeholder: *"Ask a clarifying question about the framework…"*
- On submit, a TA "reply" card is injected at the **bottom of the Activity Feed** in the core panel.
- For the initial implementation, responses can be pre-authored (pattern-matched to keywords) or left as a stub with a "Your question has been logged — the TA will respond shortly" message.

---

### 2.3 Split View — 'Orchestrate' Bridge

A **"Split View" toggle button** sits in the top-right of the Conversational Core panel (e.g., labelled: `⬛ Orchestrate` or `Split View`).

#### Behaviour
- When toggled **on**:
  - The TA Pulse Sidebar collapses to a narrow icon rail (≈60px).
  - The Conversational Core shrinks to ≈50% viewport width.
  - A **StrategyDotZero iframe or placeholder panel** slides in from the right, occupying the remaining 50%.
  - The left panel now shows a **step-by-step guidance strip** at the top ("Step 2: Map your tension points to the Ecosystem Canvas in the tool →").
- When toggled **off**:
  - The layout reverts to the default 70/30 split with a smooth CSS transition.

> **Note:** If the StrategyDotZero tool is a separate web application, the split view embeds it in an `<iframe>`. If cross-origin restrictions exist, a placeholder panel is rendered instead with a deep-link button.

---

## 3. Component Architecture

```
src/
  pages/
    TeachingAssistant.jsx          ← Top-level page component, manages state
  components/
    ta/
      ActivityFeed.jsx             ← Scrollable card list (core panel)
      ActivityCard.jsx             ← Base wrapper for all card types
      TheorySnippet.jsx            ← Theory card variant
      InteractiveWorkspace.jsx     ← Fillable workspace card (tables, inputs, tags)
      ReflectionPrompt.jsx         ← TA "reply" bubble card
      TAAnnouncement.jsx           ← Full-width milestone banner
      TAPulseSidebar.jsx           ← Full right sidebar component
      ContextBadge.jsx             ← Course day pill + progress bar
      NextBestActions.jsx          ← Checklist component
      AskTAInput.jsx               ← Bottom quick-input textarea
      SplitViewToggle.jsx          ← Toggle button and layout controller
      StrategyDotZeroPanel.jsx     ← iframe wrapper / placeholder for split view
```

---

## 4. Functional Requirements Detail

### 4.1 Feedback Triggers (Reflection Prompts)

| Interaction | Trigger Condition | Prompt Content |
|---|---|---|
| "Strategic Tension Points" workspace | ≥ 3 entries saved | "You've listed 3 symptoms — can you group these into a single systemic tension like 'Speed vs. Quality'?" |
| "Friction Points" workspace | ≥ 2 entries | "Consider which friction points are symptoms vs. root causes — which one single tension underlies them all?" |
| "Structural vs. Behavioural" table | At least 1 row in both columns | "Notice how structural changes often enable behavioural ones. Which came first in your organisation's history?" |

- Prompts appear **below** the workspace they relate to, with a 600ms delay after the last keystroke.
- Each prompt is shown a maximum of once per session.

### 4.2 Time-Gating (Admin-Controlled Release)

- A `courseConfig.js` file (or simple JSON data file) defines which activity cards are unlocked at which **day index**.
- Example shape:
```js
// src/data/courseConfig.js
export const courseSchedule = [
  {
    dayLabel: "Weekend 2, Day 1: Designing the Ecosystem",
    unlockedCards: ["welcome-w2", "theory-iof", "ws-tension-points", "theory-systems", "ws-structural-change"]
  },
  {
    dayLabel: "Weekend 2, Day 2: AI Ethics & Change Management",
    unlockedCards: ["theory-ai-ethics", "ws-friction-points", "ws-change-management"]
  }
];
```
- A simulated "current day" state is controlled by an **Admin Toggle** — a small, accessible admin panel (protected by a simple flag or local password) that lets a moderator advance the `activeDayIndex`.
- When the admin advances the day, newly unlocked cards animate into the feed.

### 4.3 Export for Presentation

A **"Export Summary" button** appears in the top-right of the page (or at the bottom of the Activity Feed after all cards are completed).

- On click, it collects all **completed Interactive Workspace entries** from local state.
- Renders them into a clean, printable **"Executive Summary" layout**:
  - A title block: *"Strategy Orchestration — Weekend 2 Summary"*
  - Each completed workspace rendered as a labelled section with the student's inputs.
  - The student's "Ask the TA" questions and any reflection prompts are listed in an *"Insights & Reflections"* appendix section.
- Implementation options:
  - **Option A (Recommended):** Open a new `window.print()`-ready HTML view with print-specific CSS (`@media print`).
  - **Option B:** Use the browser's clipboard to copy a structured text version.

---

## 5. Visual Design Specification

### Palette (Dark Mode Default, Light Mode Toggle Available)

| Token | Dark Value | Light Value | Usage |
|---|---|---|---|
| `--bg-primary` | `#0d0f14` | `#f8f9fc` | Page background |
| `--bg-card` | `#161b27` | `#ffffff` | Card backgrounds |
| `--bg-sidebar` | `#111520` | `#f2f4f8` | Sidebar background |
| `--accent-primary` | `#6366f1` | `#4f46e5` | CTA buttons, active states (existing) |
| `--accent-ta` | `#10b981` | `#059669` | TA-specific accents (reflection prompts, TA badge) |
| `--accent-locked` | `#3d4258` | `#d1d5db` | Locked card overlay |
| `--border-color` | `rgba(255,255,255,0.07)` | `rgba(0,0,0,0.08)` | Card and panel borders |
| `--text-primary` | `#e8eaf2` | `#111827` | Primary text |
| `--text-secondary` | `#8b90a7` | `#6b7280` | Metadata, labels |

### Typography
- Inherit the existing `--font-heading` and `--font-body` tokens from `index.css`.
- Theory Snippet headlines: `1.1rem`, `font-weight: 700`.
- Interactive Workspace labels: `0.75rem`, `font-weight: 600`, `letter-spacing: 0.08em`, uppercase.
- TA Reflection Prompt text: `0.9rem`, `font-style: italic`, `color: var(--accent-ta)`.

### Card Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ 🟢 TA  [Card Type Label]               [Timestamp/State]│ ← Card Header
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Card Body (Theory text / Input fields / Table)         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Save / Done]                    [↓ Reflection Prompt]  │ ← Card Footer
└─────────────────────────────────────────────────────────┘
```

- All cards: `border-radius: 16px`, `box-shadow: var(--card-shadow)`, `border: 1px solid var(--border-color)`.
- Theory Snippets have a left `4px` accent stripe in `--accent-primary`.
- Reflection Prompts have a left `4px` accent stripe in `--accent-ta` and a slightly inset background.

### Motion & Micro-animations
- Card unlock entrance: `opacity: 0 → 1`, `translateY(12px → 0)`, duration `400ms`, easing `ease-out`.
- Split View transition: `width` CSS transition, `350ms`, easing `cubic-bezier(0.4, 0, 0.2, 1)`.
- Checklist item completion: strike-through + fade in `200ms`.
- Reflection Prompt appearance: same entrance animation as card unlock, 600ms delay after input.

---

## 6. State Management

All state lives in `TeachingAssistant.jsx` and is passed via props or a lightweight React Context:

| State Variable | Type | Description |
|---|---|---|
| `activeDayIndex` | `number` | Current admin-controlled course day (0-indexed) |
| `workspaceEntries` | `object` | Map of `{ cardId: { fields: [...] } }` keyed by workspace card ID |
| `completedCards` | `Set<string>` | Set of card IDs that have been marked complete |
| `shownReflections` | `Set<string>` | Set of reflection prompt IDs that have been surfaced (to prevent repetition) |
| `isSplitView` | `boolean` | Whether the split view is active |
| `taQuestions` | `array` | Array of `{ text, timestamp }` objects from the "Ask the TA" input |
| `checklistItems` | `array` | Current day's Next Best Action items with completion status |

State is **persisted to `localStorage`** by card ID and day, so a student can close the tab and return to their progress.

---

## 7. Files to Create / Modify

| File | Action | Notes |
|---|---|---|
| `src/components/Header.jsx` | **Modify** | Add hamburger icon, slide-in drawer, menu items "Textbook" and "Teaching Assistant" |
| `src/App.jsx` | **Modify** | Add `teaching-assistant` case to `renderPage`, import `TeachingAssistant` |
| `src/pages/TeachingAssistant.jsx` | **Create** | Top-level page, layout shell, state management |
| `src/data/courseConfig.js` | **Create** | Time-gate schedule and card definitions data file |
| `src/components/ta/ActivityFeed.jsx` | **Create** | Scrollable card list renderer |
| `src/components/ta/ActivityCard.jsx` | **Create** | Base card shell |
| `src/components/ta/TheorySnippet.jsx` | **Create** | Theory card variant |
| `src/components/ta/InteractiveWorkspace.jsx` | **Create** | Fillable form card variant |
| `src/components/ta/ReflectionPrompt.jsx` | **Create** | TA reply bubble |
| `src/components/ta/TAAnnouncement.jsx` | **Create** | Milestone banner card |
| `src/components/ta/TAPulseSidebar.jsx` | **Create** | Full right panel |
| `src/components/ta/ContextBadge.jsx` | **Create** | Day label + progress bar |
| `src/components/ta/NextBestActions.jsx` | **Create** | Action checklist |
| `src/components/ta/AskTAInput.jsx` | **Create** | Bottom quick-input |
| `src/components/ta/SplitViewToggle.jsx` | **Create** | Toggle button + layout controller |
| `src/components/ta/StrategyDotZeroPanel.jsx` | **Create** | iframe or placeholder for split view |
| `src/index.css` | **Modify** | Add new design tokens (`--accent-ta`, `--bg-sidebar`, `--bg-card`, `--accent-locked`) |

---

## 8. Out of Scope (for this plan)

- Backend API for real TA responses (stubbed with keyword matching in v1).
- Real StrategyDotZero iframe integration (placeholder panel used if cross-origin).
- Authentication and per-student data persistence in a database (localStorage only in v1).
- PDF generation library (print CSS is the recommended v1 export path).
