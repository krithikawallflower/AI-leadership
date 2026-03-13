import React, { useMemo } from 'react';

/**
 * OperatingModelVisualisation
 * Renders a company operating-model diagram that progresses through three visual
 * fidelity states tied to the course week:
 *   Week 1 (days 1-2)  → Skeleton   (wireframe, dashed)
 *   Week 2 (days 3-4)  → Blueprint  (solid blue, low-opacity fill)
 *   Week 3 (days 5-6)  → Detailed   (rich fill, inner badges)
 * All colour tokens come from the existing CSS custom properties so both light
 * and dark themes are supported automatically.
 */
const OperatingModelVisualisation = ({ currentDay = 3 }) => {
  const week = currentDay <= 2 ? 1 : currentDay <= 4 ? 2 : 3;

  // Derived style flags
  const isSkeleton  = week === 1;
  const isBlueprint = week === 2;
  const isDetailed  = week === 3;

  // --- SVG geometry ---------------------------------------------------------
  // Viewport: 800 × 340
  // Layout:
  //   Strategy bar  – full width, top
  //   4 pillar boxes – horizontally distributed, middle
  //   AI hub – small circle in column centre
  //   Governance bar – full width, bottom
  const VW = 800;
  const VH = 340;

  const strategyY   = 20;
  const strategyH   = 44;
  const pillarY     = 108;
  const pillarH     = 80;
  const pillarW     = 140;
  const govY        = 248;
  const govH        = 44;
  const hubCY       = pillarY + pillarH / 2;
  const hubR        = 22;

  // X centres for the 4 pillars (evenly spaced inside a 720-wide column)
  const gap = 720 / 4;
  const pillarCenters = [40 + gap * 0.5, 40 + gap * 1.5, 40 + gap * 2.5, 40 + gap * 3.5];

  const pillars = [
    { label: 'People',     sub: 'Talent & Culture',      cx: pillarCenters[0] },
    { label: 'Process',    sub: 'Workflows & Methods',   cx: pillarCenters[1] },
    { label: 'Technology', sub: 'Tools & Platforms',     cx: pillarCenters[2] },
    { label: 'Data',       sub: 'Insights & Governance', cx: pillarCenters[3] },
  ];

  const hubCX = VW / 2;

  // --- Colour resolution ----------------------------------------------------
  // We resolve actual CSS var values via inline styles so SVG element colours
  // can transition smoothly.

  const strokeColor    = 'var(--accent-primary)';
  const skelStroke     = 'var(--border-color)';
  const fillLow        = 'var(--accent-primary-20)';
  const fillMed        = 'var(--accent-glow)';
  const textPrimary    = 'var(--text-primary)';
  const textSecondary  = 'var(--text-secondary)';
  const edgeColor      = 'var(--accent-secondary)';
  const bgCard         = 'var(--bg-card)';
  const borderColor    = 'var(--border-color)';

  // Per-stage values
  const nodeFill = isSkeleton ? 'none' : isBlueprint ? fillLow : fillMed;
  const stroke   = isSkeleton ? skelStroke : strokeColor;
  const strokeW  = isSkeleton ? 1.5 : 2;
  const dash     = isSkeleton ? '6 4' : '0';

  const labelOpacity = isSkeleton ? 0 : 1;
  const subLabelOpacity = isDetailed ? 1 : 0;
  const edgeOpacity = isSkeleton ? 0.3 : 1;

  // Ghost label bar (skeleton mode placeholder)
  const ghostH = 8;
  const ghostFill = 'var(--border-color)';

  const TRANSITION = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

  const stages = [
    { id: 1, label: 'Skeleton' },
    { id: 2, label: 'Blueprint' },
    { id: 3, label: 'Detailed' },
  ];

  return (
    <div className="omv-wrapper">
      {/* Stage pills */}
      <div className="omv-stage-bar">
        {stages.map((s) => (
          <span
            key={s.id}
            className={`omv-stage-pill ${week === s.id ? 'active' : ''}`}
          >
            {s.label}
          </span>
        ))}
      </div>

      {/* Diagram */}
      <div className="omv-svg-container">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Operating model diagram"
          role="img"
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z"
                style={{ fill: edgeColor, transition: TRANSITION, opacity: edgeOpacity }} />
            </marker>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Strategy bar ── */}
          <rect
            x={40} y={strategyY}
            width={VW - 80} height={strategyH}
            rx={10}
            style={{
              fill: nodeFill,
              stroke,
              strokeWidth: strokeW,
              strokeDasharray: dash,
              transition: TRANSITION,
            }}
          />
          {/* Strategy label */}
          <text
            x={VW / 2} y={strategyY + strategyH / 2 + 1}
            textAnchor="middle" dominantBaseline="middle"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              fill: strokeColor,
              opacity: labelOpacity,
              transition: TRANSITION,
              textTransform: 'uppercase',
            }}
          >
            STRATEGY
          </text>
          {/* Skeleton ghost bar (Strategy) */}
          {isSkeleton && (
            <rect
              x={VW / 2 - 60} y={strategyY + (strategyH - ghostH) / 2}
              width={120} height={ghostH}
              rx={4}
              style={{ fill: ghostFill, opacity: 0.4 }}
            />
          )}

          {/* ── Vertical connectors: Strategy → Pillars ── */}
          {pillars.map((p) => (
            <line
              key={`vs-${p.label}`}
              x1={p.cx} y1={strategyY + strategyH}
              x2={p.cx} y2={pillarY}
              style={{
                stroke: edgeColor,
                strokeWidth: 1.5,
                opacity: edgeOpacity,
                transition: TRANSITION,
              }}
            />
          ))}

          {/* ── Pillar boxes ── */}
          {pillars.map((p) => (
            <g key={p.label}>
              <rect
                x={p.cx - pillarW / 2} y={pillarY}
                width={pillarW} height={pillarH}
                rx={10}
                style={{
                  fill: nodeFill,
                  stroke,
                  strokeWidth: strokeW,
                  strokeDasharray: dash,
                  transition: TRANSITION,
                  filter: isDetailed ? 'url(#glow)' : 'none',
                }}
              />
              {/* Main label */}
              <text
                x={p.cx} y={pillarY + (isDetailed ? pillarH / 2 - 10 : pillarH / 2 + 2)}
                textAnchor="middle" dominantBaseline="middle"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 600,
                  fill: strokeColor,
                  opacity: labelOpacity,
                  transition: TRANSITION,
                }}
              >
                {p.label}
              </text>
              {/* Sub-label (detailed only) */}
              <text
                x={p.cx} y={pillarY + pillarH / 2 + 12}
                textAnchor="middle" dominantBaseline="middle"
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '9px',
                  fontWeight: 400,
                  fill: 'var(--text-secondary)',
                  opacity: subLabelOpacity,
                  transition: TRANSITION,
                }}
              >
                {p.sub}
              </text>
              {/* Skeleton ghost bar (pillar) */}
              {isSkeleton && (
                <rect
                  x={p.cx - 40} y={pillarY + (pillarH - ghostH) / 2}
                  width={80} height={ghostH}
                  rx={4}
                  style={{ fill: ghostFill, opacity: 0.4 }}
                />
              )}
            </g>
          ))}

          {/* ── Horizontal flow arrows between pillars ── */}
          {pillars.slice(0, 3).map((p, i) => {
            const x1 = p.cx + pillarW / 2;
            const x2 = pillars[i + 1].cx - pillarW / 2;
            const midY = pillarY + pillarH / 2;
            return (
              <line
                key={`flow-${i}`}
                x1={x1} y1={midY}
                x2={x2 - 6} y2={midY}
                markerEnd="url(#arrow)"
                style={{
                  stroke: edgeColor,
                  strokeWidth: 1.5,
                  opacity: edgeOpacity,
                  transition: TRANSITION,
                }}
              />
            );
          })}

          {/* ── AI hub circle ── */}
          <circle
            cx={hubCX} cy={hubCY}
            r={hubR}
            style={{
              fill: isSkeleton ? 'none' : isBlueprint ? fillLow : strokeColor,
              stroke,
              strokeWidth: strokeW,
              strokeDasharray: dash,
              transition: TRANSITION,
            }}
          />
          <text
            x={hubCX} y={hubCY}
            textAnchor="middle" dominantBaseline="middle"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '10px',
              fontWeight: 700,
              fill: isDetailed ? 'white' : strokeColor,
              opacity: labelOpacity,
              transition: TRANSITION,
              letterSpacing: '0.04em',
            }}
          >
            AI
          </text>

          {/* ── Vertical connectors: Pillars → Governance ── */}
          {pillars.map((p) => (
            <line
              key={`vg-${p.label}`}
              x1={p.cx} y1={pillarY + pillarH}
              x2={p.cx} y2={govY}
              style={{
                stroke: edgeColor,
                strokeWidth: 1.5,
                opacity: edgeOpacity,
                transition: TRANSITION,
              }}
            />
          ))}

          {/* ── Governance bar ── */}
          <rect
            x={40} y={govY}
            width={VW - 80} height={govH}
            rx={10}
            style={{
              fill: nodeFill,
              stroke,
              strokeWidth: strokeW,
              strokeDasharray: dash,
              transition: TRANSITION,
            }}
          />
          <text
            x={VW / 2} y={govY + govH / 2 + 1}
            textAnchor="middle" dominantBaseline="middle"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              fill: strokeColor,
              opacity: labelOpacity,
              transition: TRANSITION,
            }}
          >
            GOVERNANCE &amp; OVERSIGHT
          </text>
          {/* Skeleton ghost bar (governance) */}
          {isSkeleton && (
            <rect
              x={VW / 2 - 80} y={govY + (govH - ghostH) / 2}
              width={160} height={ghostH}
              rx={4}
              style={{ fill: ghostFill, opacity: 0.4 }}
            />
          )}

          {/* ── Detailed badge: small corner accent squares ── */}
          {isDetailed && pillars.map((p) => (
            <rect
              key={`badge-${p.label}`}
              x={p.cx - pillarW / 2 + 8} y={pillarY + 8}
              width={6} height={6}
              rx={2}
              style={{
                fill: edgeColor,
                opacity: 0.8,
                transition: TRANSITION,
              }}
            />
          ))}
        </svg>
      </div>

      <style>{`
        .omv-wrapper {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          box-shadow: var(--card-shadow);
        }
        .omv-stage-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .omv-stage-pill {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.25rem 0.85rem;
          border-radius: 99px;
          border: 1.5px solid var(--border-color);
          color: var(--text-tertiary);
          background: transparent;
          transition: all 0.4s ease;
        }
        .omv-stage-pill.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
        }
        .omv-svg-container {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default OperatingModelVisualisation;
