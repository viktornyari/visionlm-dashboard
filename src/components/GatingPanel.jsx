import { GATING_DATA, AC, ACB, AMB, PUR, t1, t2, t3, t4, bd, CARD2 } from '../constants'

export default function GatingPanel({ highlight }) {
  const { level1, level2, level3, tokenSaved, totalEvents } = GATING_DATA
  const levels = [level1, level2, level3]

  const hl = {
    outline: highlight ? '1px solid rgba(0,206,176,0.28)' : 'none',
    boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.07)' : 'none',
    transition: 'outline 0.3s, box-shadow 0.3s',
  }

  return (
    <div className="glass" style={{ padding: '13px 15px', ...hl }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
        <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={ACB} strokeWidth="2" strokeLinecap="round">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path d="M19.07 4.93l-1.41 1.41M3.52 19.07l1.41-1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
          AI Signal Quality
        </div>
        <span style={{ fontSize: 9, color: t4 }}>{totalEvents} events today</span>
      </div>

      {/* Three levels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 11 }}>
        {levels.map((lv, i) => {
          const pct = Math.round((lv.count / totalEvents) * 100)
          return (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: `${lv.color}18`, border: `1px solid ${lv.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 8, fontWeight: 800, color: lv.color }}>L{i + 1}</span>
                  </div>
                  <span style={{ fontSize: 10, color: t2 }}>{lv.label}</span>
                  <span style={{ fontSize: 8.5, color: t4 }}>{lv.threshold}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, fontWeight: 700, color: lv.color }}>{lv.count}</span>
                  <span style={{ fontSize: 9, color: t4 }}>{pct}%</span>
                </div>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: lv.color, borderRadius: 2, transition: 'width 1.1s ease', boxShadow: `0 0 5px ${lv.color}55` }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Token saving callout */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', background: 'rgba(0,206,176,0.05)', border: '1px solid rgba(0,206,176,0.13)', borderRadius: 8 }}>
        <div>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>Token cost saved</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 18, fontWeight: 800, color: ACB }}>~{tokenSaved}%</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 9, color: t4, lineHeight: 1.55, maxWidth: 112 }}>
          Only ambiguous frames reach the LLM — not raw streams
        </div>
      </div>

      {/* Architecture note */}
      <div style={{ marginTop: 8, padding: '7px 10px', background: 'rgba(169,125,255,0.05)', border: '1px solid rgba(169,125,255,0.12)', borderRadius: 7 }}>
        <div style={{ fontSize: 9, color: t4, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 3 }}>Why this matters</div>
        <div style={{ fontSize: 9.5, color: t3, lineHeight: 1.55 }}>
          Camera + zone + time + energy = multi-signal fusion. Not a generic AI camera.
        </div>
      </div>
    </div>
  )
}
