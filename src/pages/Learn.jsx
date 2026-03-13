import React from 'react';
import { Presentation, FileText, Book, Download, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../App';

const Learn = () => {
  const { setCurrentPage } = useTheme();
  const materials = [
    {
      day: 'Day 3',
      items: [
        { type: 'pillars', id: 'pillars', title: 'Key Leadership Pillars', author: 'Strategic Framework', time: 'Interactive' },
        { type: 'pillars', id: 'pillars-hex', title: 'Key Pillars — Option 2', author: 'Advanced Framework', time: 'Non-Linear' },
        { type: 'presentation', title: 'AI Scaling Strategies', author: 'Dr. Sarah Chen', time: '45 mins' },
        { type: 'note', title: 'Session 3 Key Takeaways', author: 'Course Curator', time: '10 mins' },
        { type: 'preread', title: 'Ethical AI Frameworks', author: 'Required Reading', time: '20 mins' }
      ]
    },
    {
      day: 'Day 2',
      items: [
        { type: 'presentation', title: 'Machine Learning for Executives', author: 'Mark T.', time: '60 mins' },
        { type: 'note', title: 'Day 2 Workshop Notes', author: 'Student Companion', time: '15 mins' }
      ]
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'pillars': return <Sparkles size={24} />;
      case 'presentation': return <Presentation size={24} />;
      case 'note': return <FileText size={24} />;
      case 'preread': return <Book size={24} />;
      default: return <FileText size={24} />;
    }
  };

  return (
    <div className="container learn-page">
      <h1 className="page-title">Learning <span className="gradient-text">Materials</span></h1>
      <p className="page-subtitle">Access your presentations, curated notes, and pre-read materials for every session.</p>

      <div className="materials-list">
        {materials.map((section, idx) => (
          <div key={idx} className="day-section">
            <h2 className="day-title">{section.day}</h2>
            <div className="materials-grid">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className={`material-card glass ${item.type === 'pillars' ? 'clickable-card' : ''}`}
                  onClick={() => item.type === 'pillars' && setCurrentPage(item.id || 'pillars')}
                >
                  <div className={`material-icon-box ${item.type}`}>
                    {getIcon(item.type)}
                  </div>
                  <div className="material-info">
                    <h3 className="material-title">{item.title}</h3>
                    <p className="material-author">{item.author}</p>
                    <div className="material-meta">
                      <Clock size={12} /> <span>{item.time}</span>
                    </div>
                  </div>
                  {item.type !== 'pillars' && (
                    <button className="download-btn">
                      <Download size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .learn-page {
          padding-top: 4rem;
          padding-bottom: 5rem;
        }
        .page-title {
          font-size: 2.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }
        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          max-width: 600px;
        }
        .day-section {
          margin-bottom: 4rem;
        }
        .day-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2rem;
          border-left: 4px solid var(--accent-primary);
          padding-left: 1rem;
        }
        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .material-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border-radius: 16px;
          gap: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: var(--card-shadow);
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }
        .material-card:hover {
          transform: scale(1.02);
          box-shadow: var(--card-shadow-hover);
        }
        .material-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .presentation { background: rgba(29, 78, 216, 0.08); color: var(--accent-primary); }
        .pillars { background: var(--accent-primary-20); color: var(--accent-primary); }
        .note { background: rgba(96, 165, 250, 0.12); color: var(--accent-secondary); }
        .preread { background: rgba(29, 78, 216, 0.06); color: var(--accent-primary); }
        
        .material-info {
          flex-grow: 1;
        }
        .material-title {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .material-author {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .material-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-tertiary);
          font-weight: 400;
        }
        .download-btn {
          color: var(--text-tertiary);
          padding: 0.5rem;
          border-radius: 8px;
        }
        .download-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .clickable-card {
          border: 2px solid transparent;
          cursor: pointer;
        }
        .clickable-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-secondary);
        }
      `}</style>
    </div>
  );
};

export default Learn;
