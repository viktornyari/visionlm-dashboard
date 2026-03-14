import { MACHINES, S } from '../constants'

const STATUS_COLOR = { running:'blue', stopped:'red', warning:'amber' }
const STATUS_LABEL = { running:'RUNNING', stopped:'STOPPED', warning:'OVERLOAD' }

export default function MachineStatus() {
  return (
    <div className="panel" style={{ overflow:'hidden' }}>
      <div style={{ padding:'11px 14px 9px', borderBottom:`1px solid ${S.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.amber} strokeWidth="2" strokeLinecap="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700, color:S.t1 }}>Machine Status</span>
        </div>
        <div style={{ display:'flex', gap:10 }}>
          <span style={{ fontSize:10, color:S.blue }}>{MACHINES.filter(m=>m.status==='running').length} running</span>
          <span style={{ fontSize:10, color:S.amber }}>{MACHINES.filter(m=>m.status==='warning').length} overload</span>
          <span style={{ fontSize:10, color:S.red }}>{MACHINES.filter(m=>m.status==='stopped').length} stopped</span>
        </div>
      </div>

      {/* Table header */}
      <div style={{ display:'grid', gridTemplateColumns:'24px 1fr 72px 76px 60px 70px', gap:0, padding:'6px 14px', background:S.panel2, borderBottom:`1px solid ${S.border}` }}>
        {['','Machine','Status','Load','Power','Uptime'].map((h,i) => (
          <div key={i} className="sec-label" style={{ textAlign: i>=2 ? 'right' : 'left' }}>{h}</div>
        ))}
      </div>

      {MACHINES.map(m => {
        const sc = STATUS_COLOR[m.status]
        const color = sc==='blue' ? S.blue : sc==='red' ? S.red : S.amber
        const bgColor = sc==='blue' ? S.blueB : sc==='red' ? S.redB : S.amberB
        return (
          <div key={m.id} className="tbl-row"
            style={{ display:'grid', gridTemplateColumns:'24px 1fr 72px 76px 60px 70px', gap:0, padding:'8px 14px', borderBottom:`1px solid rgba(255,255,255,0.03)`, alignItems:'center' }}>

            {/* Status dot */}
            <div><div className={`dot-${sc==='blue'?'blue':sc==='red'?'red':'amber'}`} style={{ animation: m.status==='warning' ? 'blink 1.2s ease-in-out infinite' : 'none' }}/></div>

            {/* Name */}
            <div>
              <div style={{ fontSize:12, fontWeight:500, color:S.t1 }}>{m.name}</div>
              <div style={{ fontSize:9.5, color:S.t3 }}>{m.zone}</div>
            </div>

            {/* Status badge */}
            <div style={{ textAlign:'right' }}>
              <span style={{ padding:'2px 6px', borderRadius:2, background:bgColor, color, fontSize:8.5, fontWeight:700, letterSpacing:0.4 }}>
                {STATUS_LABEL[m.status]}
              </span>
            </div>

            {/* Load bar */}
            <div style={{ textAlign:'right' }}>
              <div className="mono" style={{ fontSize:11, fontWeight:600, color: m.load>=90 ? S.amber : S.t2, marginBottom:2 }}>{m.load}%</div>
              <div style={{ height:3, background:S.panel3, borderRadius:2, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${m.load}%`, background: m.load>=95 ? S.red : m.load>=85 ? S.amber : S.blue, borderRadius:2 }}/>
              </div>
            </div>

            {/* kW */}
            <div style={{ textAlign:'right' }}>
              <span className="mono" style={{ fontSize:12, color: m.kw>=100 ? S.amber : S.t2 }}>{m.kw > 0 ? m.kw : '—'}</span>
              {m.kw > 0 && <span style={{ fontSize:9, color:S.t3, marginLeft:2 }}>kW</span>}
            </div>

            {/* Uptime */}
            <div style={{ textAlign:'right' }}>
              <span className="mono" style={{ fontSize:11, color:S.t3 }}>{m.uptime}</span>
            </div>
          </div>
        )
      })}

      <div style={{ padding:'7px 14px', borderTop:`1px solid ${S.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{ fontSize:9.5, color:S.t3 }}>IoT · Shelly Pro 3EM · polling 5s</span>
        <button type="button" className="btn btn-blue" style={{ fontSize:9.5, padding:'3px 9px' }}>All Machines →</button>
      </div>
    </div>
  )
}
