# AI Leadership Course: Student Companion Plan

## 1. Overview and Objectives
The Student Companion is a high-fidelity, interactive web application designed to guide students through an AI leadership course spanning 3 weekends (6 days total). The primary objectives are to track course progress, document course materials, and provide structured workspaces for both in-person and out-of-class activities.

## 2. Core Navigation & Layout
The application will feature a sleek, modern, and polished UI with a sun/moon toggle allowing users to switch seamlessly between light and dark modes.

### 2.1 The Dashboard (Landing Page)
- **Course Timeline (Key Feature)**: A central visual timeline displaying the 6-day trajectory (across 3 weekends).
  - **Current State Indicator**: Visually highlights exactly where the user currently stands in the course.
  - **Past Activities**: Displays activities that have ended or been completed from previous sessions.
  - **Upcoming Prep**: Offers clear calls to action (CTAs) and checklists for preparing for the next session.
- **Activity Access Points**: Direct entry points to the three main pillars: **Learn**, **Think**, and **Build**.

### 2.2 Material Access Mapping
Materials can be accessed from two primary perspectives:
1. **Pillar Cards**: Top-level entry points for Learn, Think, and Build.
2. **Timeline Breakdown**: Clicking on a specific day in the timeline reveals a day-wise breakdown of all materials and activities assigned for that specific day.

## 3. The Three Pillars

### 3.1 Learn Context
This section serves as the knowledge repository.
- **Presentations**: Access to slide decks and visual aids from class.
- **Notes**: Personal spaces or curated notes from each session.
- **Pre-read Materials**: Documents and articles required to be read before upcoming sessions.

### 3.2 Think Context
This section hosts workspaces for strategic activities and problem-solving.
- **Problem Workspaces**: Dedicated areas where students are posed challenges and must create strategic plans and frameworks.
- **Date Tracking**: Every activity card/workspace clearly indicates the **Date Assigned** and the **Due Date** to help manage time effectively.

### 3.3 Build Context
This section bridges theoretical learning with practical execution.
- **Simulator Environment Link**: Navigation to a separate platform/simulator environment.
- **Briefs & Outcomes**: Before jumping into the simulator, users receive clear, distinct briefs outlining the task and the expected outcomes to achieve in the sandbox.

## 4. UI/UX & Interaction Design
- **High-Fidelity Aesthetics**: Premium visual design utilizing refined typography, glassmorphism (where applicable), and visually rich color palettes to establish a premium "leadership" tone.
- **Clickable & Interactive**: Every card, timeline node, and navigation element should be distinctly clickable with smooth hover states and micro-animations to confirm interactions.
- **Light/Dark Mode (Sun/Moon Toggle)**: A prominent switch in the global header to invert the color palette seamlessly, accommodating different viewing contexts and personal preferences.

## 5. Proposed Technology Stack
- **Frontend Framework**: React (via Vite) or Next.js for rapid, modern UI development.
- **Styling**: Vanilla CSS for maximum flexibility and control, using CSS variables to manage the Light and Dark mode themes cleanly.
- **Icons & Assets**: High-quality SVG assets to ensure crisp rendering on all displays.

## 6. Implementation Milestones
- **Phase 1**: Setup project boilerplate, routing, and global CSS architecture (including light/dark themes).
- **Phase 2**: Build the Landing Page and the interactive 6-Day Timeline component.
- **Phase 3**: Develop the Learn, Think, and Build pages/components with mock data.
- **Phase 4**: Wire up cross-navigation (accessing materials via Timeline vs. Pillar Cards).
- **Phase 5**: Final visual polish, ensuring all hover states and clicks feel responsive and high-fidelity.
