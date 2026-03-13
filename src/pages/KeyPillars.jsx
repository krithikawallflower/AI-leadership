import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useTheme } from '../App';
import PillarHub from '../components/PillarHub';
import PillarDetailPanel from '../components/PillarDetailPanel';
import { PILLARS_DATA } from '../data/pillars';

const KeyPillars = () => {
  const { setCurrentPage } = useTheme();
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSelect = (pillar) => {
    if (selectedPillar?.id === pillar.id) {
      setSelectedPillar(null);
    } else {
      setSelectedPillar(pillar);
    }
  };

  return (
    <div className={`container pillars-page ${isLoaded ? 'fade-in' : ''}`}>
      <header className="pillars-header">
        <button className="back-btn" onClick={() => setCurrentPage('learn')}>
          <ArrowLeft size={18} /> Back to Learn
        </button>
        <div className="header-content">
          <div className="badge"><Sparkles size={14} /> Strategic Framework</div>
          <h1 className="page-title">Key Leadership <span className="gradient-text">Pillars</span></h1>
          <p className="page-subtitle">A comprehensive blueprint for navigating the AI era with confidence and clarity.</p>
        </div>
      </header>

      <div className={`pillars-content-layout ${selectedPillar ? 'has-selection' : ''}`}>
        <PillarHub 
          pillars={PILLARS_DATA} 
          onSelect={handleSelect} 
          selectedId={selectedPillar?.id} 
        />
        
        {selectedPillar && (
          <PillarDetailPanel 
            pillar={selectedPillar} 
            onClose={() => setSelectedPillar(null)} 
          />
        )}
      </div>

      <style>{`
        .pillars-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .pillars-page.fade-in {
          opacity: 1;
        }

        .pillars-header {
          margin-bottom: 4rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
          transition: color 0.2s ease;
        }

        .back-btn:hover {
          color: var(--accent-primary);
        }

        .header-content {
          max-width: 800px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .page-title {
          font-size: 3.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pillars-content-layout {
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          transition: all 0.5s ease;
        }

        @media (max-width: 1024px) {
          .pillars-content-layout {
            flex-direction: column;
          }
          .page-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default KeyPillars;
