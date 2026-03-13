import React from 'react';
import { MousePointer2, StickyNote, Square, Minus, Type, Image as LucideImage, Hand } from 'lucide-react';

const ToolDock = ({ activeTool, onSelectTool }) => {
  const tools = [
    { id: 'select', icon: MousePointer2, label: 'Select' },
    { id: 'pan', icon: Hand, label: 'Pan' },
    { id: 'divider-1', type: 'divider' },
    { id: 'note', icon: StickyNote, label: 'Sticky Note' },
    { id: 'shape', icon: Square, label: 'Shapes' },
    { id: 'connector', icon: Minus, label: 'Connect' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'image', icon: LucideImage, label: 'Image' },
  ];

  return (
    <div className="tool-dock-container">
      <div className="tool-dock glass">
        {tools.map((tool) => (
          tool.type === 'divider' ? (
            <div key={tool.id} className="dock-divider" />
          ) : (
            <button
              key={tool.id}
              className={`tool-btn ${activeTool === tool.id ? 'active' : ''}`}
              onClick={() => onSelectTool(tool.id)}
              title={tool.label}
            >
              <tool.icon size={20} />
            </button>
          )
        ))}
      </div>

      <style>{`
        .tool-dock-container {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }
        .tool-dock {
          display: flex;
          align-items: center;
          padding: 8px;
          gap: 6px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .tool-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .tool-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .tool-btn.active {
          background: var(--accent-primary-20);
          color: var(--accent-primary);
        }
        .dock-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
          margin: 0 4px;
        }
      `}</style>
    </div>
  );
};

export default ToolDock;
