import { useState } from 'react'
import LineChart from './LineChart'
import { t1, t2, t3, t4, t5, bd, CARD2, ACB, AC2, AC, AMB } from '../constants'

export default function OverviewCard() {
  const [tab, setTab] = useState('Week')

  return (
    <div className="glass" style={{ padding: 16 }}>
      <div className="glass-inner" style={{ padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1, marginBottom: 4 }}>
              Operational Overview
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ fontSize: 10, color: t3 }}>Idle detected</div>
              <div style={{ fontSize: 10, color: t3 }}>2× last week</div>
            </div>
            <div style={{ fontSize: 10.5, color: ACB, marginTop: 2, fontWeight: 500 }}>+ 12.83% productivity gain</div>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: t5,
              border: `1px solid ${bd}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: t3,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t1)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t3)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 2,
            marginBottom: 12,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 7,
            padding: 3,
          }}
        >
          {['Today', 'Week', 'Month'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '4px 0',
                borderRadius: 5,
                border: tab === t ? '1px solid rgba(0,206,176,0.2)' : '1px solid transparent',
                cursor: 'pointer',
                background: tab === t ? 'rgba(0,206,176,0.12)' : 'transparent',
                color: tab === t ? AC : t3,
                fontSize: 11,
                fontWeight: tab === t ? 600 : 400,
                transition: 'all 0.15s',
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <LineChart mode="total" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 10 }}>
          <div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1,
                background: `linear-gradient(135deg,${ACB},${AC2})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              + 78 %
            </div>
            <div style={{ fontSize: 9.5, color: t4, marginTop: 2 }}>Productivity Score</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: t4 }}>Last updated</div>
            <div style={{ fontSize: 10, color: t2, fontWeight: 500 }}>Today, 14:32</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 7 }}>
        {[
          { l: 'Workforce', v: '78%', c: AC },
          { l: 'Energy', v: '91kW', c: AMB },
          { l: 'Material', v: '64%', c: AC2 },
        ].map((m, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: '8px 9px',
              background: CARD2,
              border: `1px solid ${bd}`,
              borderRadius: 8,
            }}
          >
            <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>
              {m.l}
            </div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 800, color: m.c }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
