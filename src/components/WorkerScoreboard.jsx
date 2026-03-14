import { WORKERS_SCOREBOARD, S } from '../constants'

// Responsive column definition — CSS var so we can override in media query
const COLS = 'minmax(120px,1fr) 80px 64px 72px 36px'

export default function WorkerScoreboard() {
  const sorted = [...WORKERS_SCOREBOARD].sort((a,b) => b.productive - a.productive)

  return (
    <div className="panel ws-panel" style={{ overflow:'hidden' }}>
      <div className="panel-hd panel-hd-accent">
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.blue} strokeWidth="2" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span style={{ fontSize:13, fontWeight:600, color:S.t1 }}>Worker Productivity Scoreboard</span>
        </div>
        <span style={{ fontSize:10, color:S.t3, flexShrink:0 }}>{sorted.length} on shift</span>
      </div>

      {/* Column headers */}
      <div className="ws-grid" style={{ padding:'5px 12px', background:S.panel2, borderBottom:`1px solid ${S.border}` }}>
        {['Worker', 'Productive', 'Idle', 'Zone', 'Rank'].map((h, i) => (
          <div key={i} className={`sec-label ws-col-${i}`} style={{ textAlign: i >= 1 ? 'right' : 'left' }}>{h}</div>
        ))}
      </div>

      {sorted.map((w) => {
        const pColor = w.productive>=70 ? S.green : w.productive>=45 ? S.amber : S.red
        return (
          <div key={w.id} className="tbl-row ws-grid"
            style={{ padding:'8px 12px', borderBottom:`1px solid rgba(255,255,255,0.03)`, alignItems:'center' }}>

            {/* Worker */}
            <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:0 }}>
              <img src={`https://i.pravatar.cc/56?img=${10+w.id}`} alt={w.name}
                style={{ width:26, height:26, objectFit:'cover', border:`1px solid ${S.border2}`, flexShrink:0 }}
                onError={e => e.currentTarget.style.display='none'}/>
              <div style={{ minWidth:0, overflow:'hidden' }}>
                <div style={{ fontSize:12, fontWeight:500, color:S.t1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{w.name}</div>
                <div style={{ fontSize:9, color:S.t3, whiteSpace:'nowrap' }}>{w.role}</div>
              </div>
            </div>

            {/* Productive */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:3 }}>
              <span className="mono" style={{ fontSize:12, fontWeight:700, color:pColor }}>{w.productive}%</span>
              <div style={{ width:'100%', height:3, background:S.panel3 }}>
                <div style={{ height:'100%', width:`${w.productive}%`, background:pColor }}/>
              </div>
            </div>

            {/* Idle */}
            <div style={{ textAlign:'right' }}>
              <span className="mono" style={{ fontSize:12, color:w.idle>=55?S.red:w.idle>=30?S.amber:S.t2 }}>{w.idle}%</span>
            </div>

            {/* Zone */}
            <div className="ws-col-zone" style={{ display:'flex', justifyContent:'flex-end' }}>
              <span style={{ fontSize:9.5, color:S.t3, padding:'2px 5px', background:S.panel2, border:`1px solid ${S.border}`, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:68 }}>
                {w.zone.split(' ')[0]}
              </span>
            </div>

            {/* RAG */}
            <div style={{ display:'flex', justifyContent:'flex-end' }}>
              <div className={`rag rag-${w.rag}`}/>
            </div>
          </div>
        )
      })}

      <div style={{ padding:'7px 12px', borderTop:`1px solid ${S.border}`, display:'flex', gap:14, alignItems:'center', flexWrap:'wrap' }}>
        {[['green','≥70%'],['amber','45–70%'],['red','<45%']].map(([c,l]) => (
          <div key={c} style={{ display:'flex', alignItems:'center', gap:5 }}>
            <div className={`rag rag-${c}`} style={{ width:10, height:10 }}/>
            <span style={{ fontSize:9.5, color:S.t3 }}>{l}</span>
          </div>
        ))}
        <div style={{ marginLeft:'auto', fontSize:9.5, color:S.t3 }}>Managers immediately understand.</div>
      </div>
    </div>
  )
}
