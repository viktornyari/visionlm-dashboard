import { LOSS_SOURCES, AC, AMB, RED, t1, t2, t3, t4, bd, CARD2 } from '../constants'

const maxFt = Math.max(...LOSS_SOURCES.map(l => l.ftPerMonth))

function Arrow({ dir }) {
  if (dir === 'up') return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
  )
  if (dir === 'dn') return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
  )
  return <span style={{ width: 9, display: 'inline-block', fontSize: 9, color: t4 }}>—</span>
}

export default function LossSourcesCard({ highlight }) {
  const total = LOSS_SOURCES.reduce((s, l) => s + l.ftPerMonth, 0)

  const hl = {
    outline: highlight ? '1px solid rgba(0,206,176,0.28)' : 'none',
    boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.07)' : 'none',
    transition: 'outline 0.3s, box-shadow 0.3s',
  }

  return (
    <div className="glass" style={{ overflow: 'hidden', ...hl }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px 10px', borderBottom: `1px solid ${bd}` }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Top 5 Loss Sources
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.4 }}>Total / month</div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, color: RED }}>{total.toLocaleString()} Ft</div>
        </div>
      </div>

      {/* Rows */}
      {LOSS_SOURCES.map((loss, i) => {
        const barW = Math.round((loss.ftPerMonth / maxFt) * 100)
        return (
          <div key={i}
            style={{ padding: '9px 16px', borderBottom: i < LOSS_SOURCES.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none', cursor: 'pointer', transition: 'background 0.12s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.022)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
              {/* Rank badge */}
              <div style={{ width: 18, height: 18, borderRadius: 5, background: i === 0 ? 'rgba(255,96,96,0.12)' : CARD2, border: `1px solid ${i === 0 ? 'rgba(255,96,96,0.22)' : bd}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 9, fontWeight: 700, color: i === 0 ? RED : t4 }}>{loss.rank}</span>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: t1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '62%' }}>
                    {loss.desc}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                    <Arrow dir={loss.trend}/>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11.5, fontWeight: 700, color: RED }}>
                      {loss.ftPerMonth.toLocaleString()} Ft
                    </span>
                  </div>
                </div>
                {/* Bar */}
                <div style={{ height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden', marginBottom: 4 }}>
                  <div style={{ height: '100%', width: `${barW}%`, borderRadius: 2, background: i === 0 ? RED : i === 1 ? AMB : 'rgba(255,255,255,0.18)' }}/>
                </div>
                {/* Meta tags */}
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ fontSize: 9, color: t4, padding: '1px 5px', background: CARD2, border: `1px solid ${bd}`, borderRadius: 4 }}>{loss.zone}</span>
                  {loss.events && <span style={{ fontSize: 9, color: t4 }}>{loss.events} events</span>}
                  {loss.extra  && <span style={{ fontSize: 9, color: t4 }}>{loss.extra}</span>}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Footer */}
      <div style={{ padding: '9px 16px', borderTop: `1px solid ${bd}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, color: t4 }}>4-week Vision LM baseline</span>
        <button type="button"
          style={{ padding: '4px 11px', borderRadius: 6, background: 'rgba(0,206,176,0.07)', border: '1px solid rgba(0,206,176,0.18)', color: AC, fontSize: 10, fontWeight: 600, cursor: 'pointer', transition: 'all 0.14s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,206,176,0.14)'; e.currentTarget.style.borderColor = 'rgba(0,206,176,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,206,176,0.07)'; e.currentTarget.style.borderColor = 'rgba(0,206,176,0.18)' }}>
          Full Audit →
        </button>
      </div>
    </div>
  )
}
