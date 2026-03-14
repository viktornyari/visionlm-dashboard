import { useState, useEffect } from 'react'
import OeeRing from './OeeRing'
import LineChart from './LineChart'
import { AC, ACB, AC2, AMB, t1, t2, t3, t4, bd } from '../constants'

export default function SavingsCard({ highlight }) {
  const [val, setVal] = useState(0)
  const [chartMode, setChartMode] = useState('total')
  const hl = { outline: highlight ? '1px solid rgba(0,206,176,0.2)' : 'none', borderRadius: 14, transition: 'outline 0.3s' }

  useEffect(() => {
    const tgt = 8200000
    const dur = 1600
    const s = performance.now()
    const fr = (n) => {
      const p = Math.min((n - s) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(e * tgt))
      if (p < 1) requestAnimationFrame(fr)
    }
    const t = setTimeout(() => requestAnimationFrame(fr), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="savings-grid" style={hl}>
      {/* Card 1: Savings Value */}
      <div className="glass" style={{ padding: 18 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, color: t1, marginBottom: 2 }}>
          Savings Value
        </div>
        <div style={{ fontSize: 10.5, color: t3, marginBottom: 12 }}>
          The sum of all operational savings tracked by Vision LM
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1,
              background: `linear-gradient(135deg,${ACB} 0%,${AC} 45%,${AC2} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            + {val.toLocaleString()}
          </span>
          <span style={{ fontSize: 12, color: t3, fontWeight: 500 }}>Ft / year</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, color: t3, marginBottom: 10 }}>
          vs last month
          <span style={{ color: AC, fontWeight: 700, fontSize: 11 }}>+ 12.4%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, color: t3, marginBottom: 10 }}>
          Yearly avg:&nbsp;
          <span style={{ color: t2, fontWeight: 500 }}>6,840,000 Ft</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 10,
            color: 'rgba(0,206,176,0.55)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 14,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          How ROI is calculated?
        </div>
        <div style={{ display: 'flex', gap: 10, paddingTop: 12, borderTop: `1px solid ${bd}`, flexWrap: 'wrap' }}>
          {[
            { v: '4.2 mo', l: 'ROI Payback', c: t1 },
            { v: '540k Ft', l: 'This Month', c: AC },
            { v: '72 kWh', l: 'Energy/Shift', c: AC2 },
            { v: '−12,895', l: 'Peak Idle Cost', c: AMB },
          ].map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, color: m.c, lineHeight: 1, marginBottom: 2 }}>
                {m.v}
              </div>
              <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: OEE Score */}
      <div className="glass" style={{ padding: 18, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <OeeRing pct={87} sz={120} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>
            OEE Breakdown
          </div>
          {[
            { c: AC, n: 'Workforce', p: '45%' },
            { c: AMB, n: 'Energy', p: '35%' },
            { c: AC2, n: 'Material', p: '20%' },
          ].map((l, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: 2, background: l.c }} />
                <span style={{ fontSize: 9.5, color: t2 }}>{l.n}</span>
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: l.c }}>{l.p}</span>
            </div>
          ))}
          <div style={{ height: 1, background: bd, margin: '6px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5 }}>
            <span style={{ color: t3 }}>vs last week</span>
            <span style={{ color: AC, fontWeight: 700 }}>+2.4%</span>
          </div>
        </div>
      </div>

      {/* Card 3: Monthly savings trend */}
      <div className="glass savings-trend-card" style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 11, color: t3 }}>Monthly savings trend (×1,000 Ft)</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['total', 'workforce', 'energy'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setChartMode(m)}
                style={{
                  padding: '3px 10px',
                  borderRadius: 5,
                  border: chartMode === m ? '1px solid rgba(0,206,176,0.2)' : `1px solid ${bd}`,
                  cursor: 'pointer',
                  background: chartMode === m ? 'rgba(0,206,176,0.12)' : 'rgba(255,255,255,0.04)',
                  color: chartMode === m ? AC : t3,
                  fontSize: 10,
                  fontWeight: chartMode === m ? 600 : 400,
                  transition: 'all 0.14s',
                  textTransform: 'capitalize',
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <LineChart mode={chartMode} key={chartMode} />
      </div>
    </div>
  )
}
