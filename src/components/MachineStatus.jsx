import { MACHINES, S } from '../constants'

const STATUS_COLOR = { running:'teal', stopped:'red', warning:'amber' }
const STATUS_LABEL = { running:'RUNNING', stopped:'STOPPED', warning:'OVERLOAD' }

export default function MachineStatus() {
  return (
    <div className="panel" style={{ overflow:'hidden' }}>
      <div className="panel-hd panel-hd-amber">
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.amber} strokeWidth="2" strokeLinecap="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span style={{ fontSize:13, fontWeight:600, color:S.t1 }}>Machine Status</span>
        </div>
        <div style={{ display:'flex', gap:10, flexShrink:0 }}>
          <span style={{ fontSize:10.5, color:S.blue, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='running').length} running</span>
          <span style={{ fontSize:10.5, color:S.amber, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='warning').length} overload</span>
          <span style={{ fontSize:10.5, color:S.red, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='stopped').length} stopped</span>
        </div>
      </div>

      {/* Table header */}
      <div className="ms-grid" style={{ padding:'5px 12px', background:S.panel2, borderBottom:`1px solid ${S.border}` }}>
        {['Machine', 'Status', 'Load', 'Power', 'Uptime'].map((h, i) => (
          <div key={i} className={`sec-label ms-col-${i}`} style={{ textAlign: i >= 2 ? 'right' : 'left' }}>{h}</div>
        ))}
      </div>

      {MACHINES.map(m => {
        const sc    = STATUS_COLOR[m.status]
        const color = sc==='teal' ? S.blue : sc==='red' ? S.red : S.amber
        const bg    = sc==='teal' ? S.blueB : sc==='red' ? S.redB : S.amberB
        const bd    = sc==='teal' ? 'rgba(0,180,200,0.35)' : sc==='red' ? 'rgba(200,40,40,0.35)' : 'rgba(196,144,16,0.35)'
        return (
          <div key={m.id} className="tbl-row ms-grid"
            style={{ padding:'8px 12px', borderBottom:`1px solid rgba(255,255,255,0.03)`, alignItems:'center' }}>

            {/* Machine name + dot — no STATUS badge here on mobile, moved to its own column */}
            <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:0 }}>
              <div className={`dot-${sc==='teal'?'teal':sc==='red'?'red':'amber'}`}
                style={{ flexShrink:0, animation: m.status==='warning' ? 'blink 1s step-end infinite' : 'none' }}/>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:12, fontWeight:500, color:S.t1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{m.name}</div>
                <div style={{ fontSize:9.5, color:S.t3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{m.zone}</div>
              </div>
            </div>

            {/* Status badge */}
            <div>
              <span className={`badge badge-${sc}`}>{STATUS_LABEL[m.status]}</span>
            </div>

            {/* Load */}
            <div style={{ display:'flex', alignItems:'center', gap:6, justifyContent:'flex-end' }}>
              <div className="ms-bar-wrap" style={{ flex:1, height:4, background:S.panel3, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${m.load}%`, background: m.load>=95?S.red:m.load>=85?S.amber:S.blue }}/>
              </div>
              <span className="mono" style={{ fontSize:11.5, fontWeight:700, color:m.load>=90?S.amber:S.t2, minWidth:34, textAlign:'right', flexShrink:0 }}>{m.load}%</span>
            </div>

            {/* kW */}
            <div className="ms-col-power" style={{ textAlign:'right' }}>
              <span className="mono" style={{ fontSize:12, color:m.kw>=100?S.amber:S.t2 }}>{m.kw>0?m.kw:'—'}</span>
              {m.kw>0 && <span style={{ fontSize:9, color:S.t3, marginLeft:2 }}>kW</span>}
            </div>

            {/* Uptime */}
            <div className="ms-col-uptime" style={{ textAlign:'right' }}>
              <span className="mono" style={{ fontSize:11, color:S.t3 }}>{m.uptime}</span>
            </div>
          </div>
        )
      })}

      <div style={{ padding:'7px 12px', borderTop:`1px solid ${S.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{ fontSize:9.5, color:S.t3 }}>IoT · Shelly Pro 3EM · polling 5s</span>
        <button type="button" className="btn btn-teal" style={{ fontSize:9.5, padding:'3px 9px' }}>All Machines →</button>
      </div>
    </div>
  )
}
