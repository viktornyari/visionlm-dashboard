import { WORKERS_SCOREBOARD, S } from '../constants'

export default function WorkerScoreboard() {
  const sorted = [...WORKERS_SCOREBOARD].sort((a,b) => b.productive - a.productive)

  return (
    <div className="panel" style={{ overflow:'hidden' }}>
      {/* Header */}
      <div style={{ padding:'11px 14px 9px', borderBottom:`1px solid ${S.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.blue} strokeWidth="2" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700, color:S.t1 }}>Worker Productivity Scoreboard</span>
        </div>
        <span style={{ fontSize:10, color:S.t3 }}>{sorted.length} on shift</span>
      </div>

      {/* Table header */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 90px 90px 80px 52px', gap:0, padding:'6px 14px', background:S.panel2, borderBottom:`1px solid ${S.border}` }}>
        {['Worker','Productive','Idle','Zone','Rank'].map((h,i) => (
          <div key={i} className="sec-label" style={{ textAlign: i >= 1 ? 'right' : 'left', paddingRight: i === 4 ? 0 : 0 }}>{h}</div>
        ))}
      </div>

      {/* Rows */}
      {sorted.map((w, i) => {
        const ragColor = w.rag==='green' ? S.green : w.rag==='amber' ? S.amber : S.red
        return (
          <div key={w.id} className="tbl-row"
            style={{ display:'grid', gridTemplateColumns:'1fr 90px 90px 80px 52px', gap:0, padding:'9px 14px', borderBottom:`1px solid rgba(255,255,255,0.03)`, alignItems:'center' }}>

            {/* Worker name */}
            <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:0 }}>
              <img src={`https://i.pravatar.cc/56?img=${10+w.id}`} alt={w.name}
                style={{ width:26, height:26, borderRadius:2, objectFit:'cover', border:`1px solid ${S.border2}`, flexShrink:0 }}
                onError={e => e.currentTarget.style.display='none'}/>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:12, fontWeight:500, color:S.t1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{w.name}</div>
                <div style={{ fontSize:9.5, color:S.t3 }}>{w.role}</div>
              </div>
            </div>

            {/* Productive */}
            <div style={{ textAlign:'right' }}>
              <div className="mono" style={{ fontSize:13, fontWeight:700, color: w.productive>=70 ? S.green : w.productive>=45 ? S.amber : S.red }}>{w.productive}%</div>
              <div style={{ height:3, background:S.panel3, borderRadius:2, overflow:'hidden', marginTop:3 }}>
                <div style={{ height:'100%', width:`${w.productive}%`, background: w.productive>=70 ? S.green : w.productive>=45 ? S.amber : S.red, borderRadius:2 }}/>
              </div>
            </div>

            {/* Idle */}
            <div style={{ textAlign:'right' }}>
              <div className="mono" style={{ fontSize:13, fontWeight:600, color:S.t2 }}>{w.idle}%</div>
            </div>

            {/* Zone */}
            <div style={{ textAlign:'right' }}>
              <span style={{ fontSize:10, color:S.t3, padding:'2px 6px', background:S.panel2, border:`1px solid ${S.border}`, borderRadius:2 }}>{w.zone.split(' ')[0]}</span>
            </div>

            {/* RAG dot */}
            <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center' }}>
              <div className={`rag rag-${w.rag}`}/>
            </div>
          </div>
        )
      })}

      {/* Footer legend */}
      <div style={{ padding:'7px 14px', borderTop:`1px solid ${S.border}`, display:'flex', gap:16, alignItems:'center' }}>
        {[['green','≥70% productive'],['amber','45–70%'],['red','<45%']].map(([c,l]) => (
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
