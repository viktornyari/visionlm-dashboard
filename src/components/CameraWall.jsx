import { CAMERAS, S } from '../constants'

function CamTile({ cam }) {
  const isOffline = cam.status === 'offline'
  const hasAlert  = cam.alert

  return (
    <div style={{ position:'relative', background:S.panel2, border:`1px solid ${hasAlert ? 'rgba(204,60,60,0.5)' : S.border}`, borderRadius:3, overflow:'hidden', aspectRatio:'16/9', cursor:'pointer', transition:'border-color 0.15s' }}
      onMouseEnter={e => { if(!hasAlert) e.currentTarget.style.borderColor=S.border2 }}
      onMouseLeave={e => { if(!hasAlert) e.currentTarget.style.borderColor=S.border }}>

      {/* Image or offline state */}
      {!isOffline && cam.thumb ? (
        <img src={cam.thumb} alt={cam.label}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', filter:'brightness(0.78) contrast(1.08) saturate(0.55)' }}
          loading="lazy" onError={e => e.currentTarget.style.display='none'}/>
      ) : (
        <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6, background:S.panel }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={S.border2} strokeWidth="1.5" strokeLinecap="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
            <line x1="1" y1="1" x2="23" y2="23" stroke={S.red} strokeWidth="1.5"/>
          </svg>
          <span style={{ fontSize:10, color:S.t3 }}>OFFLINE</span>
        </div>
      )}

      {/* Scanlines overlay */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)', pointerEvents:'none' }}/>

      {/* Alert flash border */}
      {hasAlert && <div style={{ position:'absolute', inset:0, border:'2px solid rgba(204,60,60,0.7)', borderRadius:3, pointerEvents:'none', animation:'blink 1.2s ease-in-out infinite' }}/>}

      {/* Status badge */}
      <div style={{ position:'absolute', top:5, right:5, display:'flex', alignItems:'center', gap:4, padding:'2px 7px', background:'rgba(0,0,0,0.72)', borderRadius:2 }}>
        <div className={isOffline ? 'dot-grey' : hasAlert ? 'dot-red blink' : 'dot-green'} style={{ width:5, height:5 }}/>
        <span className="mono" style={{ fontSize:8.5, color: isOffline ? S.t3 : hasAlert ? S.red : S.green, fontWeight:600, letterSpacing:0.5 }}>
          {isOffline ? 'OFF' : 'LIVE'}
        </span>
      </div>

      {/* Alert badge */}
      {hasAlert && (
        <div style={{ position:'absolute', top:5, left:5, padding:'2px 6px', background:'rgba(204,60,60,0.85)', borderRadius:2, fontSize:8, fontWeight:700, color:'#fff', letterSpacing:0.5 }}>
          ALERT
        </div>
      )}

      {/* Footer label */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'4px 7px', background:'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <div>
            <div style={{ fontSize:9.5, fontWeight:600, color:'rgba(255,255,255,0.88)' }}>{cam.label}</div>
            <div className="mono" style={{ fontSize:8, color:'rgba(255,255,255,0.4)' }}>{cam.id}</div>
          </div>
          <div className="mono" style={{ fontSize:8, color:'rgba(255,255,255,0.4)' }}>{cam.res}</div>
        </div>
      </div>
    </div>
  )
}

export default function CameraWall() {
  const online  = CAMERAS.filter(c => c.status === 'online').length
  const offline = CAMERAS.filter(c => c.status === 'offline').length
  const alerts  = CAMERAS.filter(c => c.alert).length

  return (
    <div className="panel" style={{ padding:'11px 12px' }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={S.blue} strokeWidth="2" strokeLinecap="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
          </svg>
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700, color:S.t1 }}>Camera Wall</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontSize:10, color:S.green }}>{online} online</span>
          {offline > 0 && <span style={{ fontSize:10, color:S.red }}>{offline} offline</span>}
          {alerts  > 0 && <span style={{ fontSize:10, color:S.red, animation:'blink 1.2s ease-in-out infinite' }}>{alerts} alerts</span>}
          <button type="button" className="btn btn-blue" style={{ fontSize:10, padding:'3px 9px' }}>Full Screen</button>
        </div>
      </div>
      {/* Grid */}
      <div className="camera-grid">
        {CAMERAS.map(cam => <CamTile key={cam.id} cam={cam}/>)}
      </div>
    </div>
  )
}
