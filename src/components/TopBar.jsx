import { useState, useEffect } from 'react'
import { S, FACTORY_STATUS } from '../constants'

export default function TopBar({ onMenuClick }) {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const ts = time.toLocaleTimeString('en-GB', { hour12: false })
  const ds = time.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })
  const alerts = FACTORY_STATUS.alertsToday

  return (
    <header className="dashboard-topbar" style={{ height:48, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 16px', borderBottom:`1px solid ${S.border}`, background:S.bg, flexShrink:0, gap:12, zIndex:50 }}>
      {/* Left */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <button type="button" className="btn dashboard-menu-btn" onClick={onMenuClick}
          style={{ display:'none', width:32, height:32, padding:0, alignItems:'center', justifyContent:'center' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div className="dot-blue" style={{ animation:'blink 2.5s ease-in-out infinite' }}/>
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, fontWeight:700, color:S.t1 }}>Dashboard</span>
          <span style={{ color:S.border2, fontSize:12 }}>/</span>
          <span style={{ fontSize:12, color:S.t2 }}>{FACTORY_STATUS.facility}</span>
        </div>
      </div>

      {/* Center — shift info */}
      <div style={{ display:'flex', alignItems:'center', gap:16 }}>
        <div style={{ fontSize:10.5, color:S.t3 }}>
          Shift start: <span style={{ color:S.t2, fontFamily:"'JetBrains Mono','Courier New',monospace" }}>{FACTORY_STATUS.shiftStart}</span>
        </div>
        <div style={{ width:1, height:16, background:S.border }}/>
        <div className="mono" style={{ fontSize:15, fontWeight:600, color:S.t1, letterSpacing:1 }}>{ts}</div>
        <div style={{ fontSize:11, color:S.t3 }}>{ds}</div>
      </div>

      {/* Right — alarm + user */}
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        {/* Alarm counter */}
        <div style={{ display:'flex', alignItems:'center', gap:6, padding:'5px 12px', background: alerts > 0 ? S.redB : S.panel2, border:`1px solid ${alerts > 0 ? 'rgba(204,60,60,0.3)' : S.border}`, borderRadius:3, cursor:'pointer', transition:'all 0.12s' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={alerts > 0 ? S.red : S.t3} strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="mono" style={{ fontSize:12, fontWeight:700, color: alerts > 0 ? S.red : S.t3 }}>{alerts}</span>
          <span style={{ fontSize:10, color: alerts > 0 ? 'rgba(204,60,60,0.7)' : S.t3 }}>ALARMS</span>
        </div>

        {/* User */}
        <div style={{ display:'flex', alignItems:'center', gap:7, padding:'4px 10px 4px 6px', background:S.panel2, border:`1px solid ${S.border}`, borderRadius:3, cursor:'pointer' }}>
          <img src="https://i.pravatar.cc/64?img=33" alt="admin" style={{ width:24, height:24, borderRadius:2, objectFit:'cover', border:`1px solid ${S.border2}` }} onError={e => e.currentTarget.style.display='none'}/>
          <div>
            <div style={{ fontSize:11, fontWeight:600, color:S.t1, lineHeight:1.2 }}>Facility Admin</div>
            <div style={{ fontSize:9, color:S.t3 }}>Plant A</div>
          </div>
        </div>
      </div>
    </header>
  )
}
