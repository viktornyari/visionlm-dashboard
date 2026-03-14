import { MACHINES, S } from '../constants'

const STATUS_COLOR = { running:'teal', stopped:'red', warning:'amber' }
const STATUS_LABEL = { running:'RUNNING', stopped:'STOPPED', warning:'OVERLOAD' }
const COLS = '20px minmax(0,1fr) 96px 140px 80px 72px'

export default function MachineStatus() {
  return (
    <div className="panel" style={{ overflow:'hidden' }}>
      <div className="panel-hd panel-hd-amber">
        <div style={{ display:'flex', alignItems:'center', gap:7 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.amber} strokeWidth="2" strokeLinecap="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:13, fontWeight:600, color:S.t1 }}>Machine Status</span>
        </div>
        <div style={{ display:'flex', gap:14 }}>
          <span style={{ fontSize:10.5, color:S.blue, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='running').length} running</span>
          <span style={{ fontSize:10.5, color:S.amber, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='warning').length} overload</span>
          <span style={{ fontSize:10.5, color:S.red, fontWeight:600 }}>{MACHINES.filter(m=>m.status==='stopped').length} stopped</span>
        </div>
      </div>

      {/* Table header */}
      <div style={{ display:'grid', gridTemplateColumns:COLS, padding:'5px 14px', background:S.panel2, borderBottom:`1px solid ${S.border}` }}>
        {['', 'Machine', 'Status', 'Load', 'Power', 'Uptime'].map((h, i) => (
          <div key={i} className="sec-label" style={{ textAlign: i >= 4 ? 'right' : 'left' }}>{h}</div>
        ))}
      </div>

      {MACHINES.map(m => {
        const sc    = STATUS_COLOR[m.status]
        const color = sc==='teal' ? S.blue : sc==='red' ? S.red : S.amber
        const bg    = sc==='teal' ? S.blueB : sc==='red' ? S.redB : S.amberB
        const bd    = sc==='teal' ? 'rgba(0,180,200,0.35)' : sc==='red' ? 'rgba(200,40,40,0.35)' : 'rgba(196,144,16,0.35)'
        return (
          <div key={m.id} className="tbl-row"
            style={{ display:'grid', gridTemplateColumns:COLS, padding:'7px 14px', borderBottom:`1px solid rgba(255,255,255,0.03)`, alignItems:'center' }}>

            {/* Status dot */}
            <div><div className={`dot-${sc==='teal'?'teal':sc==='red'?'red':'amber'}`}
              style={{ animation: m.status==='warning' ? 'blink 1s step-end infinite' : 'none' }}/></div>

            {/* Machine name */}
            <div style={{ minWidth:0 }}>
              <div style={{ fontSize:12.5, fontWeight:500, color:S.t1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{m.name}</div>
              <div style={{ fontSize:9.5, color:S.t3 }}>{m.zone}</div>
            </div>

            {/* Status badge */}
            <div>
              <span className={`badge badge-${sc}`} style={{ fontWeight:700, letterSpacing:0.5 }}>
                {STATUS_LABEL[m.status]}
              </span>
            </div>

            {/* Load — readout field + bar */}
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <div style={{ flex:1, height:4, background:S.panel3, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${m.load}%`, background: m.load>=95 ? S.red : m.load>=85 ? S.amber : S.blue }}/>
              </div>
              {/* WinCC readout box */}
              <span className={`readout readout-sm${m.load>=90?' readout-amber':''}`} style={{ minWidth:46 }}>
                {m.load}%
              </span>
            </div>

            {/* kW — readout field */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', gap:4 }}>
              {m.kw > 0
                ? <><span className={`readout readout-sm${m.kw>=100?' readout-amber':''}`}>{m.kw}</span>
                    <span style={{ fontSize:9, color:S.t3 }}>kW</span></>
                : <span className="readout readout-sm" style={{ color:S.t3 }}>—</span>
              }
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
        <button type="button" className="btn btn-teal" style={{ fontSize:9.5, padding:'3px 9px' }}>All Machines →</button>
      </div>
    </div>
  )
}
