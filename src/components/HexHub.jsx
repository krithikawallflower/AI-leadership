import React, { useState, useEffect } from 'react';

const HexHub = ({ title, description, accentColor, isSystemViewActive }) => {
  const [displayTitle, setDisplayTitle] = useState(title);
  const [displayDesc, setDisplayDesc] = useState(description);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setDisplayTitle(title);
      setDisplayDesc(description);
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [title, description]);

  return (
    <div className={`hex-hub glass ${isAnimating ? 'dissolve' : 'reform'}`} style={{ '--accent-color': accentColor || 'var(--accent-primary)' }}>
      <div className="hub-pulse"></div>
      <div className="hub-pulse pulse-delay-1"></div>
      
      <div className="hub-content">
        <h2 className="hub-title">{displayTitle}</h2>
        <div className="hub-divider" style={{ background: accentColor || 'var(--accent-primary)' }}></div>
        <p className="hub-description">{displayDesc}</p>
        
        {isSystemViewActive && (
          <div className="system-sync-label">
            <div className="sync-pulse"></div>
            System Synchronizing...
          </div>
        )}
      </div>

      <style>{`
        .hex-hub {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          text-align: center;
          padding: 2.5rem;
          transition: all 0.5s ease;
          border: 1px solid var(--glass-border);
        }

        .hub-pulse {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid var(--accent-color);
          opacity: 0;
          animation: hubRipple 3s infinite;
        }

        .pulse-delay-1 {
          animation-delay: 1.5s;
        }

        @keyframes hubRipple {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .hub-content {
          position: relative;
          z-index: 2;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .dissolve .hub-content {
          opacity: 0;
          filter: blur(8px);
        }

        .reform .hub-content {
          opacity: 1;
          filter: blur(0);
        }

        .hub-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .hub-divider {
          width: 40px;
          height: 3px;
          margin: 0 auto 1.5rem;
          border-radius: 2px;
          transition: background 0.5s ease;
        }

        .hub-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 240px;
        }

        .system-sync-label {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .sync-pulse {
          width: 6px;
          height: 6px;
          background: currentColor;
          border-radius: 50%;
          animation: syncPulse 1s infinite alternate;
        }

        @keyframes syncPulse {
          from { opacity: 0.3; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.2); }
        }

        @media (max-width: 1024px) {
          .hex-hub {
            width: 260px;
            height: 260px;
            padding: 1.5rem;
          }
          .hub-title { font-size: 1.1rem; }
          .hub-description { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default HexHub;
