import { MODS, AC, ACB, RED, t1, t2, t3, t4, t5, bd } from '../constants'

function statusStyle(s) {
  if (s === 'Active') return { bg: 'rgba(0,206,176,0.09)', col: AC, brd: 'rgba(0,206,176,0.22)' }
  if (s === 'Learning') return { bg: 'rgba(240,168,50,0.09)', col: '#F0A832', brd: 'rgba(240,168,50,0.22)' }
  return { bg: t5, col: t3, brd: bd }
}

export default function InsightsPanel() {
  return (
    <div className="insights-panel" style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
      <div className="glass" style={{ padding: 16, minWidth: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,206,176,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 1.2 }}>System Modules</div>
          <button
            type="button"
            className="nb"
            style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10.5, color: t3, transition: 'color 0.14s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t1)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t3)}
          >
            Next{' '}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div
          style={{
            background: 'rgba(0,206,176,0.04)',
            border: '1px solid rgba(0,206,176,0.12)',
            borderRadius: 10,
            padding: '12px 13px',
            marginBottom: 12,
            transition: 'all 0.16s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,206,176,0.07)'
            e.currentTarget.style.borderColor = 'rgba(0,206,176,0.22)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,206,176,0.04)'
            e.currentTarget.style.borderColor = 'rgba(0,206,176,0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1 }}>ROI Active Now!</span>
          </div>
          <div style={{ fontSize: 10.5, color: t2, lineHeight: 1.6, marginBottom: 10 }}>
            Facility saving&nbsp;
            <span style={{ color: ACB, fontWeight: 600 }}>~8–10M Ft/year</span>. Full deployment unlocks preventive maintenance + overload prediction.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
              <div
                style={{
                  width: '68%',
                  height: '100%',
                  background: `linear-gradient(90deg,${AC},${ACB})`,
                  borderRadius: 2,
                  boxShadow: '0 0 8px rgba(0,206,176,0.4)',
                }}
              />
            </div>
            <span style={{ fontSize: 9.5, color: AC, fontWeight: 700 }}>68%</span>
          </div>
          <div style={{ fontSize: 9.5, color: t3, lineHeight: 1.6, marginBottom: 12 }}>
            ROI payback under 12 months. Add Energy + Material modules for full potential.
          </div>
          <div style={{ display: 'flex', gap: 7 }}>
            <button type="button" className="btn-accent" style={{ flex: 1 }}>
              Full Deployment →
            </button>
            <button type="button" className="nb btn-ghost" style={{ padding: '7px 11px', borderRadius: 7 }}>
              Later
            </button>
          </div>
        </div>
      </div>

      <div className="glass insights-modules-card" style={{ padding: 0, minWidth: 0, overflow: 'visible' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 14px 10px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1 }}>AI Modules</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '3px 8px',
              background: 'rgba(255,255,255,0.028)',
              border: `1px solid ${bd}`,
              borderRadius: 5,
              fontSize: 9.5,
              color: t3,
              cursor: 'pointer',
            }}
          >
            as List{' '}
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 2 }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div
          className="insights-modules-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '24px minmax(0, 1fr) 56px 82px',
            gap: 6,
            padding: '6px 14px',
            background: 'rgba(255,255,255,0.015)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {['#', 'Module', 'Metric', ''].map((h, i) => (
            <div key={i} style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: t4 }}>
              {h}
            </div>
          ))}
        </div>
        {MODS.map((m, i) => {
          const s = statusStyle(m.status)
          return (
            <div
              key={i}
              className="insights-modules-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '24px minmax(0, 1fr) 56px 82px',
                gap: 6,
                padding: '9px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background 0.12s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.025)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11.5, fontWeight: 700, color: t4 }}>#{m.rank}</div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: t1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {m.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', flexShrink: 0 }}>
                    {m.fol.map((f, j) => (
                      <img
                        key={j}
                        src={`https://i.pravatar.cc/32?img=${f}`}
                        alt=""
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '1.5px solid rgba(3,4,5,0.9)',
                          marginLeft: j > 0 ? -4 : 0,
                        }}
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: 9.5, color: t2, fontWeight: 500, whiteSpace: 'nowrap' }}>{m.date}</span>
                </div>
              </div>
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10.5, fontWeight: 600, color: t2, whiteSpace: 'nowrap' }}>
                {m.metric}
              </div>
              <button
                type="button"
                style={{
                  padding: '3px 9px',
                  borderRadius: 5,
                  background: s.bg,
                  border: `1px solid ${s.brd}`,
                  color: s.col,
                  fontSize: 9.5,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'IBM Plex Sans',sans-serif",
                  transition: 'all 0.13s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {m.cta}
              </button>
            </div>
          )
        })}
        <div
          style={{
            padding: '10px 14px',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 10.5, fontWeight: 500, color: AC }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC, animation: 'pglow 2s ease-in-out infinite' }} />
              Pipeline running
            </div>
            <button type="button"
              title="Shift report generation — Milestone 5"
              style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 9px', background: 'rgba(255,255,255,0.025)', border: '1px dashed rgba(255,255,255,0.09)', borderRadius: 6, color: 'rgba(255,255,255,0.25)', fontSize: 9.5, fontWeight: 500, cursor: 'not-allowed', opacity: 0.75 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              Generate Shift Report
              <span style={{ fontSize: 7.5, padding: '1px 4px', background: 'rgba(240,168,50,0.12)', border: '1px solid rgba(240,168,50,0.22)', borderRadius: 3, color: '#F0A832', marginLeft: 2 }}>M5</span>
            </button>
          </div>
          <button
            type="button"
            className="nb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              padding: '5px 11px',
              background: 'rgba(248,96,96,0.07)',
              border: '1px solid rgba(248,96,96,0.2)',
              borderRadius: 6,
              color: RED,
              fontSize: 10,
              fontWeight: 600,
              transition: 'all 0.14s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(248,96,96,0.13)'
              e.currentTarget.style.borderColor = 'rgba(248,96,96,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(248,96,96,0.07)'
              e.currentTarget.style.borderColor = 'rgba(248,96,96,0.2)'
            }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            Stop
          </button>
        </div>
      </div>
    </div>
  )
}
