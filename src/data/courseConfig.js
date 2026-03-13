// src/data/courseConfig.js

export const courseSchedule = [
  {
    dayId: 1,
    dayLabel: "Weekend 1, Day 1",
    nodeLabel: "W1 · D1",
    theme: "Introducing the Framework",
    cards: []
  },
  {
    dayId: 2,
    dayLabel: "Weekend 1, Day 2",
    nodeLabel: "W1 · D2",
    theme: "Systems Thinking Basics",
    cards: []
  },
  {
    dayId: 3,
    dayLabel: "Weekend 2, Day 1",
    nodeLabel: "W2 · D1",
    theme: "Designing the Ecosystem",
    cards: [
      {
        id: "ann-welcome",
        type: "announcement",
        content: "Welcome to Weekend 2. Today's focus: Designing the Ecosystem.",
        isUnlocked: true
      },
      {
        id: "theory-iof",
        type: "theory",
        title: "The Intelligent Orchestration Framework",
        content: "Orchestration is not choreography. It is about creating the conditions where value emerges through coordination of autonomous agents.",
        highlights: [
            "Decentralized Control",
            "Real-time Feedback Loops",
            "Platform Thinking"
        ],
        isUnlocked: true
      },
      {
        id: "ws-tension-points",
        type: "workspace",
        title: "Strategic Tension Points",
        description: "List the core tensions currently pulling your organization in opposite directions.",
        fields: [
          { id: "tension1", label: "Tension 1", type: "text", placeholder: "e.g. Speed vs. Quality" }
        ],
        triggerThreshold: 3,
        reflectionPrompt: "You've listed multiple symptoms—can you group these into a single systemic tension like 'Speed vs. Quality'?",
        isUnlocked: true
      },
      {
        id: "theory-systems",
        type: "theory",
        title: "Systems Thinking: Feedback Loops",
        content: "A system's behavior is driven by its structure. To change the outcome, you must change the loop.",
        isUnlocked: false
      },
      {
        id: "ws-structural-change",
        type: "workspace",
        title: "Structural vs. Behavioral Change",
        description: "Map the required changes in your ecosystem.",
        fields: [
          { id: "structural", label: "Structural Change", type: "text" },
          { id: "behavioral", label: "Behavioral Change", type: "text" }
        ],
        isUnlocked: false
      }
    ]
  },
  {
    dayId: 4,
    dayLabel: "Weekend 2, Day 2",
    nodeLabel: "W2 · D2",
    theme: "AI Ethics & Change Management",
    cards: [
      {
        id: "theory-ai-ethics",
        type: "theory",
        title: "AI Ethics in Orchestration",
        content: "Ethics is not a constraint; it is a design principle for building trust in automated systems.",
        isUnlocked: false
      },
      {
        id: "ws-friction-points",
        type: "workspace",
        title: "Friction Points",
        description: "Identify where the 'machine' is grinding.",
        isUnlocked: false
      }
    ]
  },
  {
    dayId: 5,
    dayLabel: "Weekend 3, Day 1",
    nodeLabel: "W3 · D1",
    theme: "Scaling & Governance",
    cards: []
  },
  {
    dayId: 6,
    dayLabel: "Weekend 3, Day 2",
    nodeLabel: "W3 · D2",
    theme: "Final Validation",
    cards: []
  }
];

export const defaultNextSteps = [
  { id: 1, text: "Define your core ecosystem actors", completed: false },
  { id: 2, text: "Link your 5 strategic themes to the orchestration tool", completed: false, tag: "StrategyDotZero" },
  { id: 3, text: "Identify the primary feedback loop", completed: false }
];
