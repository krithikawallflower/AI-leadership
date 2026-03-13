import React, { useState, useRef, useEffect } from 'react';
import TopBar from '../components/think/TopBar';
import ToolDock from '../components/think/ToolDock';
import CanvasFrame from '../components/think/CanvasFrame';

const Think = () => {
  const [zoom, setZoom] = useState(0.8);
  const [offset, setOffset] = useState({ x: 100, y: 100 });
  const [activeTool, setActiveTool] = useState('select');
  const [activeDay, setActiveDay] = useState(1);
  const stageRef = useRef(null);
  const isPanning = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Frame Data
  const frames = [
    {
      day: 1,
      title: "Foundations of AI Leadership",
      artifacts: [
        { type: 'doc', title: 'AI Landscape Overview.pdf', subtitle: 'Policy Document' },
        { type: 'ppt', title: 'Session 1 Slides.pptx', subtitle: 'Course Materials' },
        { type: 'doc', title: 'The AI Imperative.pdf', subtitle: 'Pre-read' }
      ],
      postIts: [
        { content: "What surprised me?", color: "#fef08a", initialX: 50, initialY: 100, rotation: -2 },
        { content: "Key takeaway from Day 1", color: "#e0e7ff", initialX: 220, initialY: 150, rotation: 3 }
      ]
    },
    {
      day: 2,
      title: "Strategy & Opportunity Mapping",
      artifacts: [
        { type: 'doc', title: 'Strategy Framework.pdf', subtitle: 'Guidelines' },
        { type: 'ppt', title: 'Opportunity Map Deck.pptx', subtitle: 'Workshop Slides' },
        { type: 'doc', title: 'Case Study: NHS AI.pdf', subtitle: 'Reference' }
      ],
      postIts: [
        { content: "Biggest opportunity identified", color: "#d1fae5", initialX: 80, initialY: 120, rotation: 1 },
        { content: "Risk mitigation plan", color: "#fee2e2", initialX: 250, initialY: 180, rotation: -4 }
      ]
    },
    {
      day: 3,
      title: "Operating Model Design",
      artifacts: [
        { type: 'doc', title: 'OM Design Template.docx', subtitle: 'Template' },
        { type: 'ppt', title: 'Blueprint Session Slides.pptx', subtitle: 'Strategy' },
        { type: 'doc', title: 'Benchmark Report.pdf', subtitle: 'Data' }
      ],
      postIts: [
        { content: "Gap in current OM", color: "#fef08a", initialX: 100, initialY: 100, rotation: 2 },
        { content: "Quick win for Week 1", color: "#e0e7ff", initialX: 300, initialY: 140, rotation: -1 }
      ]
    },
    {
      day: 4,
      title: "AI Ethics & Governance",
      artifacts: [
        { type: 'doc', title: 'Ethics Checklist.pdf', subtitle: 'Compliance' },
        { type: 'ppt', title: 'Governance Slides.pptx', subtitle: 'Board Deck' },
        { type: 'doc', title: 'Policy Brief.pdf', subtitle: 'Executive Summary' }
      ],
      postIts: [
        { content: "Ethical tension point", color: "#fee2e2", initialX: 60, initialY: 110, rotation: -3 },
        { content: "Guardian role definition", color: "#d1fae5", initialX: 240, initialY: 160, rotation: 4 }
      ]
    },
    {
      day: 5,
      title: "Scaling & Transformation",
      isLocked: true,
      artifacts: [],
      postIts: []
    },
    {
      day: 6,
      title: "Executive Synthesis",
      isLocked: true,
      artifacts: [],
      postIts: []
    }
  ];

  // Panning Logic
  const handleMouseDown = (e) => {
    if (activeTool === 'pan' || e.button === 1 || (e.button === 0 && e.altKey)) {
      isPanning.current = true;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      document.body.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isPanning.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    setOffset(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isPanning.current = false;
    document.body.style.cursor = 'default';
  };

  // Zoom Logic
  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.05 : 0.05;
      setZoom(prev => Math.min(Math.max(prev + delta, 0.3), 2.0));
    } else {
      setOffset(prev => ({ x: prev.x - e.deltaX, y: prev.y - e.deltaY }));
    }
  };

  // Navigation Logic
  const jumpToFrame = (day) => {
    setActiveDay(day);
    const frameWidth = 1100;
    const gap = 80;
    const targetX = -((day - 1) * (frameWidth + gap)) + (window.innerWidth / 2) - (frameWidth / 2);
    setOffset({ x: targetX, y: 150 });
  };

  useEffect(() => {
    // Initial jump to Frame 1
    jumpToFrame(1);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      className="think-canvas-container"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      ref={stageRef}
    >
      <TopBar 
        onZoomIn={() => setZoom(z => Math.min(z + 0.1, 2))}
        onZoomOut={() => setZoom(z => Math.max(z - 0.1, 0.3))}
        onResetZoom={() => setZoom(0.8)}
        onJumpToFrame={jumpToFrame}
        activeDay={activeDay}
      />

      <div 
        className="canvas-stage"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
          cursor: activeTool === 'pan' ? 'grab' : 'default'
        }}
      >
        <div className="frames-container">
          {frames.map((frame) => (
            <CanvasFrame key={frame.day} {...frame} />
          ))}
        </div>
      </div>

      <ToolDock activeTool={activeTool} onSelectTool={setActiveTool} />

      <style>{`
        .think-canvas-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: var(--bg-secondary);
          background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
          background-size: 30px 30px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
        }
        .canvas-stage {
          position: absolute;
          transform-origin: 0 0;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
        .frames-container {
          display: flex;
          gap: 80px;
          padding: 100px;
        }
        [data-theme='dark'] .think-canvas-container {
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Think;
