import React from 'react';
import { BookOpen } from 'lucide-react';
import ActivityCard from './ActivityCard';

const TheorySnippet = ({ title, content, highlights = [], isLocked, isCompleted }) => {
  return (
    <ActivityCard 
      title={title} 
      type="theory" 
      icon={BookOpen} 
      isLocked={isLocked}
      isCompleted={isCompleted}
      accentColor="var(--accent-primary)"
    >
      <div className="theory-snippet">
        <p className="theory-text">{content}</p>
        
        {highlights.length > 0 && (
          <div className="highlights">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-pill">
                {h}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .theory-text {
          margin-bottom: 1.25rem;
        }
        .highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .highlight-pill {
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--accent-primary);
          border: 1px solid var(--border-color);
        }
      `}</style>
    </ActivityCard>
  );
};

export default TheorySnippet;
