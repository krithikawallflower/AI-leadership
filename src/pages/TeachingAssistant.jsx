import React, { useState, useEffect } from 'react';
import ActivityFeed from '../components/ta/ActivityFeed';
import TAPulseSidebar from '../components/ta/TAPulseSidebar';
import SplitViewToggle from '../components/ta/SplitViewToggle';
import StrategyDotZeroPanel from '../components/ta/StrategyDotZeroPanel';
import CourseTimeline from '../components/ta/CourseTimeline';
import { Download } from 'lucide-react';
import { courseSchedule, defaultNextSteps } from '../data/courseConfig';

const TeachingAssistant = () => {
  // State from localStorage if available
  const [activeDayIndex, setActiveDayIndex] = useState(2);
  const [workspaceEntries, setWorkspaceEntries] = useState(() => {
    const saved = localStorage.getItem('ta_workspace_entries');
    return saved ? JSON.parse(saved) : {};
  });
  const [completedCardIds, setCompletedCardIds] = useState(() => {
    const saved = localStorage.getItem('ta_completed_cards');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [nextSteps, setNextSteps] = useState(() => {
    const saved = localStorage.getItem('ta_next_steps');
    return saved ? JSON.parse(saved) : defaultNextSteps;
  });
  const [isSplitView, setIsSplitView] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('ta_workspace_entries', JSON.stringify(workspaceEntries));
  }, [workspaceEntries]);

  useEffect(() => {
    localStorage.setItem('ta_completed_cards', JSON.stringify([...completedCardIds]));
  }, [completedCardIds]);

  useEffect(() => {
    localStorage.setItem('ta_next_steps', JSON.stringify(nextSteps));
  }, [nextSteps]);

  const currentDay = courseSchedule[activeDayIndex];

  const handleWorkspaceSave = (cardId, data) => {
    setWorkspaceEntries(prev => ({
      ...prev,
      [cardId]: data
    }));

    // Auto-complete logic: if all fields have content
    const card = currentDay.cards.find(c => c.id === cardId);
    if (card && card.fields) {
      const allFilled = card.fields.every(f => data[f.id] && data[f.id].trim().length > 0);
      if (allFilled && !completedCardIds.has(cardId)) {
        const newCompleted = new Set(completedCardIds);
        newCompleted.add(cardId);
        setCompletedCardIds(newCompleted);
      }
    }
  };

  const handleActionToggle = (actionId) => {
    setNextSteps(prev => prev.map(step => 
      step.id === actionId ? { ...step, completed: !step.completed } : step
    ));
  };

  const handleAskSubmit = (question) => {
    console.log("TA Question submitted:", question);
    // Future: Add logic to inject response card to feed
  };

  const handleExport = () => {
    // Generate a simple text summary for MVP
    let summary = "# Strategy Orchestration - Executive Summary\n\n";
    summary += `Course: ${currentDay.dayLabel} - ${currentDay.theme}\n\n`;
    
    currentDay.cards.forEach(card => {
      if (card.type === 'workspace' && workspaceEntries[card.id]) {
        summary += `## ${card.title}\n`;
        Object.entries(workspaceEntries[card.id]).forEach(([key, val]) => {
          const field = card.fields.find(f => f.id === key);
          summary += `### ${field ? field.label : key}\n${val}\n\n`;
        });
      }
    });

    // Create a blob and download it
    const blob = new Blob([summary], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Strategy_Summary_${currentDay.dayLabel.replace(/ /g, '_')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const progress = currentDay ? 
    completedCardIds.size / currentDay.cards.filter(c => c.type !== 'announcement').length : 0;

  return (
    <div className={`ta-page-container ${isSplitView ? 'split-view-active' : ''}`}>
      <div className="main-content-layout">
        <div className="conversational-core">
          <header className="core-header">
            <div className="header-info">
              <h1 className="page-title">Strategy Companion</h1>
              <p className="page-subtitle">Your proactive guide to orchestration.</p>
            </div>
            <div className="header-actions">
              <button className="export-btn" onClick={handleExport}>
                <Download size={16} />
                <span>Export Summary</span>
              </button>
              <SplitViewToggle 
                isActive={isSplitView} 
                onToggle={() => setIsSplitView(!isSplitView)} 
              />
            </div>
          </header>

          <CourseTimeline 
            days={courseSchedule}
            activeDayIndex={activeDayIndex}
            onDaySelect={(index) => setActiveDayIndex(index)}
          />

          <ActivityFeed 
            cards={currentDay.cards}
            workspaceEntries={workspaceEntries}
            onWorkspaceSave={handleWorkspaceSave}
            completedCardIds={completedCardIds}
          />
        </div>

        <TAPulseSidebar 
          dayLabel={currentDay.dayLabel}
          theme={currentDay.theme}
          progress={progress}
          actions={nextSteps}
          onActionToggle={handleActionToggle}
          onAskSubmit={handleAskSubmit}
        />
      </div>

      <StrategyDotZeroPanel isVisible={isSplitView} />

      <style>{`
        .ta-page-container {
          display: flex;
          min-height: calc(100vh - 72px);
          overflow: hidden;
        }
        .main-content-layout {
          display: flex;
          flex: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .conversational-core {
          flex: 1;
          padding: 3rem 4rem;
          overflow-y: auto;
          background: var(--bg-primary);
        }
        .core-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .page-title {
          font-size: 2.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
          font-weight: 300;
        }
        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .export-btn:hover {
          background: var(--bg-secondary);
          transform: translateY(-2px);
          box-shadow: var(--card-shadow);
        }

        /* Split View States */
        .split-view-active .main-content-layout {
          flex: 0 0 50%;
        }
        .split-view-active .conversational-core {
          padding: 2rem;
        }
        .split-view-active .core-header {
          margin-bottom: 2rem;
        }
        .split-view-active .page-title {
          font-size: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .conversational-core {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeachingAssistant;
