import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Square, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../App';
import HexCanvas from '../components/HexCanvas';
import { PILLARS_DATA } from '../data/pillars';

const KeyPillarsHex = () => {
  const { setCurrentPage } = useTheme();
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [isSystemViewActive, setIsSystemViewActive] = useState(false);
  const [systemViewStep, setSystemViewStep] = useState(0);
  const [expandedMobileNode, setExpandedMobileNode] = useState(null);

  const startSystemView = () => {
    setIsSystemViewActive(true);
    setSelectedPillar(null);
    let step = 1;
    setSystemViewStep(1);

    const interval = setInterval(() => {
      step += 1;
      if (step > 6) {
        clearInterval(interval);
        setIsSystemViewActive(false);
        setSystemViewStep(0);
      } else {
        setSystemViewStep(step);
      }
    }, 800);
  };

  const handleSelect = (pillar) => {
    if (isSystemViewActive) return;
    if (selectedPillar?.id === pillar.id) {
      setSelectedPillar(null);
    } else {
      setSelectedPillar(pillar);
    }
  };

  return (
    <div className="container pillars-hex-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => setCurrentPage('learn')}>
          <ArrowLeft size={18} /> Back to Learn
        </button>
        <div className="header-flex">
          <div className="title-group">
            <h1 className="page-title">Intelligent Orchestration <span className="gradient-text">Framework</span></h1>
            <p className="page-subtitle">A dynamic, non-linear representation of the six interdependent strategic pillars.</p>
          </div>
          <button 
            className={`system-view-btn ${isSystemViewActive ? 'active' : ''}`}
            onClick={isSystemViewActive ? () => {} : startSystemView}
            disabled={isSystemViewActive}
          >
            {isSystemViewActive ? <Square size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
            {isSystemViewActive ? 'System Pulse Active' : 'Full System View'}
          </button>
        </div>
      </header>

      {/* Desktop Layout: Hexagonal Iris */}
      <div className="desktop-view">
        <HexCanvas 
          pillars={PILLARS_DATA}
          selectedPillar={selectedPillar}
          onSelect={handleSelect}
          isSystemViewActive={isSystemViewActive}
          systemViewStep={systemViewStep}
        />
      </div>

      {/* Mobile Layout: Accordion */}
      <div className="mobile-view">
        <div className="mobile-hub-preview glass">
          <h2 className="preview-title">
            {selectedPillar ? selectedPillar.title : "Select a Pillar"}
          </h2>
          <p className="preview-desc">
            {selectedPillar ? selectedPillar.description : "The orchestration framework is a continuous learning loop."}
          </p>
        </div>

        <div className="mobile-accordion">
          {PILLARS_DATA.map((pillar) => (
            <div 
              key={pillar.id} 
              className={`accordion-item glass ${selectedPillar?.id === pillar.id ? 'active' : ''}`}
              onClick={() => handleSelect(pillar)}
            >
              <div className="accordion-header">
                <span className="node-num" style={{ color: pillar.color }}>{pillar.number}</span>
                <span className="node-title">{pillar.title}</span>
                {selectedPillar?.id === pillar.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {selectedPillar?.id === pillar.id && (
                <div className="accordion-content fade-in">
                  <p>{pillar.description}</p>
                  <div className="interdependence-hint" style={{ color: pillar.color }}>
                    {pillar.id === 'sensing' && "→ Direct relationship with Articulation & Strategic Design"}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-hex-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 4rem;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 2.8rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .system-view-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .system-view-btn:hover:not(:disabled) {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .system-view-btn.active {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background: var(--accent-primary-20);
        }

        .mobile-view {
          display: none;
        }

        @media (max-width: 1024px) {
          .page-title { font-size: 2.2rem; }
          .header-flex { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 768px) {
          .desktop-view { display: none; }
          .mobile-view { display: flex; flex-direction: column; gap: 2rem; }
          
          .mobile-hub-preview {
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            border: 1px solid var(--accent-primary-20);
          }

          .preview-title { font-size: 1.2rem; margin-bottom: 1rem; }
          .preview-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

          .mobile-accordion {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .accordion-item {
            padding: 1.25rem;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .accordion-item.active {
            border-color: var(--accent-primary);
          }

          .accordion-header {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .node-num { font-weight: 800; font-size: 1.1rem; }
          .node-title { flex: 1; font-weight: 700; font-size: 1rem; }

          .accordion-content {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--glass-border);
          }

          .accordion-content p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 1rem;
          }

          .interdependence-hint {
            font-size: 0.8rem;
            font-weight: 700;
          }

          .fade-in {
            animation: fadeIn 0.4s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default KeyPillarsHex;
