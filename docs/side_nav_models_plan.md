# Side Navigation & AI Models Plan

## 1. Overview
The goal is to introduce a global side navigation panel, accessible via a hamburger menu in the top navigation bar. This side panel serves as the primary mechanism for the user to switch between four distinct "AI Models" or specialized tool contexts.

## 2. Updated Navigation Architecture
- **Top Navigation Bar (`Header.jsx`):**
  - Add a **Hamburger Menu Icon** (e.g., `Menu` from `lucide-react`) to the left of the Logo.
- **Side Panel (Drawer Component):**
  - Clicking the hamburger menu will slide out a fixed-position side panel from the left edge of the screen.
  - The side panel will list four primary contexts:
    1. **Textbook Model**
    2. **TA Model**
    3. **My little helper Model**
    4. **Project management Model**
  - The panel will include a semi-transparent backdrop overlay. Clicking on the backdrop or a "Close" icon will dismiss the side panel.

## 3. The "Textbook Model" Context
- The entire existing application (The 6-Day Timeline Dashboard, Learn, Think, Build pillars) will be encapsulated solely under the **Textbook Model**.
- Navigating to the **Textbook Model** from the side panel will route the user back to the existing current landing page.
- Navigating to the other three models will initially display placeholder components or unique dashboards tailored to those specific AI personas.

## 4. UI/UX Considerations
- **Animations:** Smooth slide-in/slide-out transitions for the drawer to maintain the premium, high-fidelity aesthetic. 
- **Active States:** The currently selected model should be visually highlighted in the side panel so the user is always aware of their active context.
- **Theme Support:** The side panel must respect the existing light/dark mode CSS tokens (using glassmorphism where appropriate).
- **Graceful degradation:** The drawer state must be easily manageable without disrupting current internal routing of the Textbook model.

## 5. Proposed Implementation Phases (When ready to build)
1. **Component Creation:** 
   - Build a generic `SlideOverMenu` or `SidePanel` component mapping out the 4 menu items.
2. **Header Integration:**
   - Update `Header.jsx` to include the Hamburger icon. 
   - Add state (`isSidebarOpen`, `setIsSidebarOpen`) to toggle the visibility of the new component.
3. **Context / Routing Update:**
   - Update `App.jsx` to introduce a new state variable: `currentModel` (defaulting to `'Textbook'`).
   - Modify the rendering logic: If `currentModel === 'Textbook'`, render the traditional Dashboard. If another model is selected, render its respective placeholder page.
