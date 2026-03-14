import { useState } from 'react'
import { ROWS, BDG, AC, AMB, RED, t1, t2, t3, t4, t5, bd, bd2, CARD2 } from '../constants'

const HDR = ['Rank', 'Person', 'Activity', 'Zone', 'Duration', 'Productivity', 'Camera', 'Last Action', '']

export default function ActivityTable({ highlight }) {
  const [sel, setSel] = useState(null)
  const hl = { outline: highlight ? '1px solid rgba(0,206,176,0.28)' : 'none', boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.07)' : 'none', transition: 'outline 0.3s, box-shadow 0.3s' }

  return (
    <div className="glass" style={{ overflow: 'hidden', ...hl }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px 6px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, color: t1, display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Recent Activity
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ display: 'flex', gap: 3, padding: 3, background: CARD2, border: `1px solid ${bd}`, borderRadius: 6 }}>
            {['Grid', 'List'].map((v, i) => (
              <button
                key={v}
                type="button"
                style={{
                  padding: '3px 9px',
                  borderRadius: 4,
                  border: i === 1 ? '1px solid rgba(0,206,176,0.2)' : '1px solid transparent',
                  background: i === 1 ? 'rgba(0,206,176,0.10)' : 'transparent',
                  color: i === 1 ? AC : t3,
                  fontSize: 10,
                  fontWeight: i === 1 ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.14s',
                }}
              >
                {v}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', background: CARD2, border: `1px solid ${bd}`, borderRadius: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={t3} strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              placeholder="Search…"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: t1,
                fontSize: 11,
                width: 90,
                fontFamily: "'DM Sans',sans-serif",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.018)', borderBottom: '1px solid rgba(255,255,255,0.045)' }}>
              {HDR.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '4px 10px',
                    textAlign: 'left',
                    fontSize: 8.5,
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    textTransform: 'uppercase',
                    color: t4,
                    whiteSpace: 'nowrap',
                    paddingLeft: i === 0 ? 14 : 10,
                    paddingRight: i === HDR.length - 1 ? 14 : 10,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => {
              const b = BDG[r.ac] || BDG.idle
              const isSel = sel === i
              const pc = r.prod >= 70 ? AC : r.prod >= 40 ? AMB : RED
              return (
                <tr
                  key={i}
                  className="tbl-row"
                  onClick={() => setSel(isSel ? null : i)}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.028)',
                    background: isSel ? 'rgba(0,206,176,0.042)' : 'transparent',
                  }}
                >
                  <td style={{ padding: '4px 10px', paddingLeft: 14 }}>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11.5, fontWeight: 700, color: t4 }}>#{r.rank}</span>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <img
                        src={`https://i.pravatar.cc/56?img=${r.img}`}
                        alt={r.name}
                        style={{ width: 22, height: 22, borderRadius: '50%', objectFit: 'cover', border: `1px solid ${bd2}`, flexShrink: 0 }}
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      <div>
                        <div style={{ fontSize: 10.5, fontWeight: 500, color: t1, whiteSpace: 'nowrap' }}>{r.name}</div>
                        <div style={{ fontFamily: 'monospace', fontSize: 8.5, color: t4 }}>{r.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '2px 6px',
                        borderRadius: 4,
                        fontSize: 9,
                        fontWeight: 600,
                        background: b.bg,
                        color: b.col,
                        border: `1px solid ${b.brd}`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {b.lbl}
                    </span>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <span
                      style={{
                        fontSize: 9,
                        padding: '2px 6px',
                        borderRadius: 4,
                        background: t5,
                        border: `1px solid ${bd}`,
                        color: t2,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.zone}
                    </span>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 9.5, color: t2 }}>{r.dur}</span>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11.5, fontWeight: 800, color: pc }}>{r.prod}%</span>
                      <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${r.prod}%`, background: pc, borderRadius: 2 }} />
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <div
                      style={{
                        width: 42,
                        height: 26,
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: `1px solid ${bd}`,
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={r.cam}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.75) saturate(0.5)',
                          display: 'block',
                        }}
                        loading="lazy"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage:
                            'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)',
                          pointerEvents: 'none',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 2,
                          right: 2,
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: AC,
                          animation: 'pglow 2s ease-in-out infinite',
                        }}
                      />
                    </div>
                  </td>
                  <td style={{ padding: '4px 10px' }}>
                    <span style={{ fontSize: 9.5, color: t3, whiteSpace: 'nowrap' }}>{r.last}</span>
                  </td>
                  <td style={{ padding: '4px 14px 4px 10px' }}>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button type="button" className="btn-ghost">
                        View
                      </button>
                      <button type="button" className="btn-ghost" style={{ padding: '3px 6px' }}>
                        ···
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 14px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <span style={{ fontSize: 9.5, color: t4 }}>Showing 6 of 42 persons on record</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['←', '→'].map((c, i) => (
            <button
              key={i}
              type="button"
              className="nb"
              style={{
                width: 22,
                height: 22,
                borderRadius: 5,
                background: t5,
                border: `1px solid ${bd}`,
                color: t3,
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.13s',
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
    </div>
  )
}
