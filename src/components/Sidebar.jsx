import { S } from '../constants'

const NAV_ITEMS = [
  { id: 'Dashboard',    icon: ['M3 3h7v7H3z','M14 3h7v7h-7z','M14 14h7v7h-7z','M3 14h7v7H3z'] },
  { id: 'Live Cameras', icon: ['M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'], extra:'cam', badge:'2', badgeSev:'amber' },
  { id: 'Events',       icon: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z','M14 2v6h6','M16 13H8','M16 17H8','M10 9H8'], badge:'4', badgeSev:'red' },
  { id: 'Workers',      icon: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2','M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'] },
  { id: 'Machines',     icon: ['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'] },
  { id: 'Zones',        icon: ['M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z','M8 2v16','M16 6v16'] },
  { id: 'Safety',       icon: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'] },
  { id: 'Reports',      icon: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z','M14 2v6h6'] },
  { id: 'Settings',     icon: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z','M19.07 4.93l-1.41 1.41M3.52 19.07l1.41-1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2'] },
]

export default function Sidebar({ active, setActive, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}
          role="button" tabIndex={0} onKeyDown={e => e.key === 'Escape' && setSidebarOpen(false)} aria-label="Close" />
      )}
      <aside className={`dashboard-sidebar${sidebarOpen ? ' sidebar-open' : ''}`}
        style={{ borderTop:`2px solid ${S.blue}` }}>

        {/* Logo */}
        <div style={{ padding:'0 14px', height:46, display:'flex', alignItems:'center', gap:9, borderBottom:`1px solid ${S.border}`, flexShrink:0, background:S.sidebar }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={S.blue} strokeWidth="2" strokeLinecap="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
            <circle cx="12" cy="12" r="1" fill={S.blue} stroke="none"/>
          </svg>
          <div>
            <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700, color:S.t1, lineHeight:1 }}>Vision LM</div>
            <div style={{ fontSize:8.5, color:S.t3, textTransform:'uppercase', letterSpacing:1.2, marginTop:2 }}>Industrial AI</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex:1, overflowY:'auto', padding:'8px 0', scrollbarWidth:'none' }}>
          <div className="sec-label" style={{ padding:'8px 14px 5px' }}>Navigation</div>
          {NAV_ITEMS.map(item => {
            const on = active === item.id
            return (
              <div key={item.id} className={`nav-item${on ? ' active' : ''}`}
                onClick={() => { setActive(item.id); setSidebarOpen?.(false) }}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActive(item.id)}
                style={{ position:'relative' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon.map((d,j) => <path key={j} d={d}/>)}
                  {item.extra === 'cam' && <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>}
                </svg>
                {item.id}
                {item.badge && (
                  <span style={{ marginLeft:'auto', fontSize:9, fontWeight:700, padding:'1px 5px', borderRadius:0,
                    background: item.badgeSev==='red' ? 'rgba(200,40,40,0.15)' : 'rgba(196,144,16,0.15)',
                    color: item.badgeSev==='red' ? S.red : S.amber,
                    border: `1px solid ${item.badgeSev==='red' ? 'rgba(200,40,40,0.35)' : 'rgba(196,144,16,0.35)'}` }}>
                    {item.badge}
                  </span>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding:'10px 12px 14px', borderTop:`1px solid ${S.border}`, flexShrink:0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:8 }}>
            <div className="dot-teal" style={{ animation:'blink 2.5s step-end infinite' }}/>
            <span style={{ fontSize:11, color:S.t2, fontWeight:500 }}>Pipeline running</span>
          </div>
          <button type="button" className="btn btn-red" style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:5 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="0"/></svg>
            Stop Pipeline
          </button>
        </div>
      </aside>
    </>
  )
}
