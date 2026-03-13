import React from 'react';
import { Rocket, Shield, Zap, ExternalLink, CheckCircle } from 'lucide-react';

const Build = () => {
  const briefs = [
    {
      id: 'sim-1',
      title: 'The Governance Sandbox',
      overview: 'Test your ethical framework against a series of unpredictable AI deployment scenarios.',
      outcomes: [
        'Validated Governance Model',
        'Risk Mitigation Report',
        'Stakeholder Alignment Score'
      ],
      difficulty: 'Advanced',
      icon: Shield,
      color: 'var(--accent-primary)'
    },
    {
      id: 'sim-2',
      title: 'Scalability Stress Test',
      overview: 'Optimize an AI infrastructure project while maintaining performance and budget constraints.',
      outcomes: [
        'Infrastructure Blueprint',
        'Cost-Efficiency Audit',
        'Auto-scaling Strategy'
      ],
      difficulty: 'Intermediate',
      icon: Zap,
      color: 'var(--accent-secondary)'
    }
  ];

  return (
    <div className="container build-page">
      <div className="build-hero">
        <Rocket size={48} className="rocket-icon" />
        <h1 className="page-title">Build & <span className="gradient-text">Simulate</span></h1>
        <p className="page-subtitle">Apply your theoretical knowledge in our advanced simulator environments. Real-time feedback and high-stakes scenarios.</p>
      </div>

      <div className="briefs-grid">
        {briefs.map((brief) => (
          <div key={brief.id} className="brief-card glass">
            <div className="brief-header">
              <div className="brief-icon" style={{ background: `${brief.color}15`, color: brief.color }}>
                <brief.icon size={28} />
              </div>
              <span className="difficulty-badge">{brief.difficulty}</span>
            </div>
            
            <div className="brief-content">
              <h2 className="brief-title">{brief.title}</h2>
              <p className="brief-overview">{brief.overview}</p>
              
              <div className="outcomes-section">
                <h3 className="outcomes-title">Expected Outcomes</h3>
                <ul className="outcomes-list">
                  {brief.outcomes.map((outcome, i) => (
                    <li key={i} className="outcome-item">
                      <CheckCircle size={14} className="check-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="simulator-link-btn" onClick={() => window.open('https://simulator.example.ai', '_blank')}>
              Enter Simulator <ExternalLink size={18} />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .build-page {
          padding-top: 4rem;
          padding-bottom: 5rem;
        }
        .build-hero {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rocket-icon {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .briefs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }
        .brief-card {
          padding: 2.5rem;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: all 0.4s ease;
          box-shadow: var(--card-shadow);
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }
        .brief-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--card-shadow-hover);
          border-color: var(--accent-primary);
        }
        .brief-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brief-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .difficulty-badge {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          border-radius: 99px;
          color: var(--text-secondary);
        }
        .brief-title {
          font-size: 1.75rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .brief-overview {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .outcomes-section {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 16px;
        }
        .outcomes-title {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .outcomes-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .outcome-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .check-icon {
          color: var(--accent-secondary);
          flex-shrink: 0;
        }
        .simulator-link-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem;
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: 16px;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .simulator-link-btn:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }
        @media (max-width: 640px) {
          .briefs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Build;
