import { useState } from 'react'
import { WK, t1, t3, t4, t5, bd, bd2, CARD2 } from '../constants'

export default function WorkersCard({ highlight }) {
  const [page, setPage] = useState(0)
  const vis = WK.slice(page * 2, page * 2 + 2)
  const hl = { outline: highlight ? '1px solid rgba(0,206,176,0.28)' : 'none', boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.07)' : 'none', transition: 'outline 0.3s, box-shadow 0.3s' }

  return (
    <div className="glass" style={{ padding: '14px 16px', ...hl }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
        <div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1 }}>Active Workers</div>
          <div style={{ fontSize: 10, color: t3, marginTop: 1 }}>
            {page * 2 + 1}–{Math.min(page * 2 + 2, WK.length)} of {WK.length} on shift
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {['←', '→'].map((c, i) => (
            <button
              key={i}
              type="button"
              className="nb"
              onClick={() => setPage((p) => (i === 0 ? Math.max(0, p - 1) : Math.min(Math.ceil(WK.length / 2) - 1, p + 1)))}
              style={{
                width: 26,
                height: 26,
                borderRadius: 6,
                background: t5,
                border: `1px solid ${bd}`,
                color: t3,
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.14s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = bd2
                e.currentTarget.style.color = t1
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = bd
                e.currentTarget.style.color = t3
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {vis.map((w, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: '11px 12px',
              background: CARD2,
              border: `1px solid ${bd}`,
              borderRadius: 10,
              transition: 'border-color 0.15s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = bd2)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = bd)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <img
                src={`https://i.pravatar.cc/56?img=${w.img}`}
                alt={w.name}
                style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: `1.5px solid ${bd2}` }}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: t1 }}>{w.name}</div>
                <div style={{ fontSize: 9, color: t4 }}>{w.role}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
              <span style={{ fontSize: 9, color: t4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Productivity</span>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 800, color: w.col }}>{w.pct}%</span>
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${w.pct}%`,
                  borderRadius: 2,
                  background: w.col,
                  transition: 'width 1.2s ease',
                  boxShadow: `${w.col}66 0 0 6px`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
