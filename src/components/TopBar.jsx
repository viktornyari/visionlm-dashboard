import { useState, useEffect } from 'react'
import { S, FACTORY_STATUS } from '../constants'

export default function TopBar({ onMenuClick }) {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const ts  = time.toLocaleTimeString('en-GB', { hour12: false })
  const ds  = time.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })
  const alerts = FACTORY_STATUS.alertsToday

  return (
    <header style={{
      height: 46, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 14px', borderBottom:`1px solid ${S.border}`,
      background: S.bg, flexShrink:0, gap:12, zIndex:50,
      borderTop:`2px solid ${S.blue}`,                       /* WinCC: accent top border */
    }}>
      {/* Left — title + facility */}
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <button type="button" className="btn dashboard-menu-btn" onClick={onMenuClick}
          style={{ display:'none', width:30, height:30, padding:0, alignItems:'center', justifyContent:'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className="dot-blue" style={{ animation:'blink 2.5s step-end infinite' }}/>
        <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:14, fontWeight:700, color:S.t1, letterSpacing:0.2 }}>
          Dashboard
        </span>
        <span style={{ color:S.border2, fontSize:13 }}>/</span>
        <span style={{ fontSize:12, color:S.t2 }}>{FACTORY_STATUS.facility}</span>
        <span style={{ fontSize:11, color:S.t3, marginLeft:4 }}>
          Shift: <span className="mono" style={{ color:S.t2 }}>{FACTORY_STATUS.shiftStart}</span>
        </span>
      </div>

      {/* Center — live clock */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span className="mono" style={{ fontSize:16, fontWeight:600, color:S.t1, letterSpacing:2 }}>{ts}</span>
        <span style={{ fontSize:11, color:S.t3 }}>{ds}</span>
      </div>

      {/* Right — alarm + user */}
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        {/* Alarm block — WinCC style */}
        <div style={{
          display:'flex', alignItems:'center', gap:7, padding:'4px 12px',
          background: alerts > 0 ? S.redB : 'transparent',
          border:`1px solid ${alerts > 0 ? 'rgba(184,50,50,0.4)' : S.border}`,
          cursor:'pointer', transition:'all 0.1s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={alerts > 0 ? S.red : S.t3} strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="mono" style={{ fontSize:12, fontWeight:700, color: alerts > 0 ? S.red : S.t3 }}>{alerts}</span>
          <span style={{ fontSize:9, color: alerts > 0 ? S.red : S.t3, letterSpacing:0.5, textTransform:'uppercase' }}>Alarms</span>
        </div>

        {/* User chip */}
        <div style={{ display:'flex', alignItems:'center', gap:7, padding:'3px 10px 3px 5px', background:S.panel2, border:`1px solid ${S.border}`, cursor:'pointer' }}>
          <img src="https://i.pravatar.cc/64?img=33" alt="admin"
            style={{ width:22, height:22, objectFit:'cover', border:`1px solid ${S.border2}`, borderRadius:1, flexShrink:0 }}
            onError={e => e.currentTarget.style.display='none'}/>
          <div>
            <div style={{ fontSize:11, fontWeight:600, color:S.t1, lineHeight:1.2 }}>Facility Admin</div>
            <div style={{ fontSize:9, color:S.t3 }}>Plant A</div>
          </div>
        </div>
      </div>
    </header>
  )
}
