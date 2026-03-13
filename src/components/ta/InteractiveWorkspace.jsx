import React, { useState } from 'react';
import { Layout } from 'lucide-react';
import ActivityCard from './ActivityCard';

const InteractiveWorkspace = ({ 
  id,
  title, 
  description, 
  fields = [], 
  isLocked, 
  isCompleted, 
  onSave,
  initialData = {} 
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (fieldId, value) => {
    const newData = { ...formData, [fieldId]: value };
    setFormData(newData);
    onSave && onSave(id, newData);
  };

  return (
    <ActivityCard 
      title={title} 
      type="workspace" 
      icon={Layout} 
      isLocked={isLocked}
      isCompleted={isCompleted}
      accentColor="var(--accent-secondary)"
    >
      <div className="workspace-container">
        {description && <p className="workspace-desc">{description}</p>}
        
        <div className="workspace-fields">
          {fields.map((field) => (
            <div key={field.id} className="field-group">
              <label htmlFor={field.id} className="field-label">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  className="workspace-input area"
                  placeholder={field.placeholder}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              ) : (
                <input
                  id={field.id}
                  type="text"
                  className="workspace-input"
                  placeholder={field.placeholder}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .workspace-desc {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          color: var(--text-tertiary);
        }
        .workspace-fields {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .field-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .workspace-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .workspace-input:focus {
          outline: none;
          border-color: var(--accent-secondary);
          background: var(--bg-primary);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .workspace-input.area {
          min-height: 100px;
          resize: vertical;
        }
      `}</style>
    </ActivityCard>
  );
};

export default InteractiveWorkspace;
