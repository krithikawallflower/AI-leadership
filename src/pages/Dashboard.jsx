import React from 'react';
import Timeline from '../components/Timeline';
import PillarCard from '../components/PillarCard';
import { BookOpen, Lightbulb, Box, ArrowRight } from 'lucide-react';
import { useTheme } from '../App';

const Dashboard = () => {
  const { setCurrentPage } = useTheme();

  const pillars = [
    {
      id: 'learn',
      title: 'Learn',
      description: 'Access course presentations, your personal notes, and high-impact pre-read materials.',
      icon: BookOpen,
      color: 'var(--accent-primary)',
      status: '4 New Materials'
    },
    {
      id: 'think',
      title: 'Think',
      description: 'Dive into strategic workspaces where you tackle leadership problems with frameworks.',
      icon: Lightbulb,
      color: 'var(--accent-secondary)',
      status: '2 Activities Due'
    },
    {
      id: 'build',
      title: 'Build',
      description: 'Navigate to the simulator to apply your learning in a high-stakes AI environment.',
      icon: Box,
      color: 'var(--accent-primary)',
      status: 'Next Challenge Ready'
    }
  ];

  return (
    <div className="container dashboard-page">
      <section className="dashboard-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome back, <span className="gradient-text">Leader</span>.</h1>
          <p className="hero-subtitle">You are currently on Day 3 of the AI Leadership Journey. Here is your progress and what's next.</p>
        </div>
        <div className="next-session-card glass">
          <div className="next-label">Next Live Session</div>
          <div className="next-date">Tomorrow, 09:00 AM</div>
          <button className="prep-btn" onClick={() => setCurrentPage('learn')}>
            Prepare for Session 4 <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <Timeline currentDay={3} />

      <section className="pillars-grid">
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.id}
            {...pillar}
            onClick={() => setCurrentPage(pillar.id)}
          />
        ))}
      </section>

      <style>{`
        .dashboard-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
        }
        .dashboard-hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }
        .hero-title {
          font-size: 3rem;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
        }
        .next-session-card {
          padding: 1.5rem 2rem;
          border-radius: 20px;
          min-width: 300px;
          border-left: 4px solid var(--accent-primary);
          box-shadow: var(--card-shadow);
        }
        .next-label {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .next-date {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .prep-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-primary);
        }
        .prep-btn:hover {
          gap: 0.75rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-hero {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
