import { useState } from 'react'
import { EVENTS, S } from '../constants'

const SEV_COLOR = { red: S.red, amber: S.amber, green: S.green, blue: S.blue }
const SEV_BG    = { red: S.redB, amber: S.amberB, green: S.greenB, blue: S.blueB }
const SEV_LABEL = { red:'CRIT', amber:'WARN', green:'INFO', blue:'INFO' }
const TYPE_ICON = {
  idle:    'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  machine: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  safety:  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  energy:  'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
}

export default function EventFeed() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? EVENTS : EVENTS.filter(e => e.severity === filter || e.type === filter)

  return (
    <div className="panel" style={{ display:'flex', flexDirection:'column', height:'100%' }}>
      {/* Header */}
      <div style={{ padding:'11px 12px 8px', borderBottom:`1px solid ${S.border}`, flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
          <div style={{ display:'flex', alignItems:'center', gap:7 }}>
            <div className="dot-red blink"/>
            <span style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:13, fontWeight:700, color:S.t1 }}>Event Feed</span>
          </div>
          <span className="mono" style={{ fontSize:10, color:S.t3 }}>{EVENTS.length} events</span>
        </div>
        {/* Filter pills */}
        <div style={{ display:'flex', gap:4 }}>
          {['all','red','amber','green'].map(f => (
            <button key={f} type="button"
              onClick={() => setFilter(f)}
              style={{ padding:'2px 8px', borderRadius:2, border:`1px solid ${filter===f ? SEV_COLOR[f]||S.blue : S.border}`,
                background: filter===f ? (SEV_BG[f]||'rgba(74,158,204,0.10)') : 'transparent',
                color: filter===f ? (SEV_COLOR[f]||S.blue) : S.t3,
                fontSize:9.5, fontWeight:600, cursor:'pointer', transition:'all 0.12s',
                textTransform:'uppercase', letterSpacing:0.5 }}>
              {f === 'all' ? 'ALL' : f === 'red' ? 'CRIT' : f === 'amber' ? 'WARN' : 'INFO'}
            </button>
          ))}
        </div>
      </div>

      {/* Event list */}
      <div style={{ flex:1, overflowY:'auto', padding:'4px 0' }}>
        {filtered.map((ev, i) => {
          const color = SEV_COLOR[ev.severity]
          const bg    = SEV_BG[ev.severity]
          const iconPath = TYPE_ICON[ev.type] || TYPE_ICON.machine
          return (
            <div key={ev.id}
              style={{ display:'flex', alignItems:'flex-start', gap:9, padding:'8px 12px', borderBottom:`1px solid rgba(255,255,255,0.028)`, cursor:'pointer', transition:'background 0.1s', background: i === 0 && ev.severity === 'red' ? 'rgba(204,60,60,0.04)' : 'transparent' }}
              onMouseEnter={e => e.currentTarget.style.background = S.panel2}
              onMouseLeave={e => e.currentTarget.style.background = i === 0 && ev.severity === 'red' ? 'rgba(204,60,60,0.04)' : 'transparent'}>

              {/* Severity dot */}
              <div style={{ width:6, height:6, borderRadius:'50%', background:color, flexShrink:0, marginTop:4, boxShadow: ev.severity==='red' ? `0 0 5px ${color}` : 'none', animation: ev.severity==='red' && i===0 ? 'blink 1.2s step-end infinite' : 'none' }}/>

              {/* Content */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:2 }}>
                  <span className="readout readout-sm" style={{ minWidth:44, fontSize:11 }}>{ev.time}</span>
                  <span style={{ padding:'1px 5px', borderRadius:2, background:bg, color, fontSize:8.5, fontWeight:700, letterSpacing:0.5, flexShrink:0 }}>
                    {SEV_LABEL[ev.severity]}
                  </span>
                  <span style={{ fontSize:11, color:S.t1, fontWeight:500, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                    {ev.msg}
                  </span>
                </div>
                <div style={{ display:'flex', gap:8 }}>
                  <span style={{ fontSize:9.5, color:S.t3 }}>{ev.zone}</span>
                  <span className="mono" style={{ fontSize:9, color:S.t3 }}>{ev.cam}</span>
                </div>
              </div>

              {/* Action arrow */}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={S.t3} strokeWidth="2" strokeLinecap="round" style={{ flexShrink:0, marginTop:4 }}>
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div style={{ padding:'7px 12px', borderTop:`1px solid ${S.border}`, display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
        <span style={{ fontSize:9.5, color:S.t3 }}>Auto-refreshing every 30s</span>
        <button type="button" className="btn" style={{ fontSize:9.5, padding:'3px 9px' }}>View all →</button>
      </div>
    </div>
  )
}
