import { NAV, AC, bd, t2, t4 } from '../constants'

export default function Sidebar({ active, setActive }) {
  return (
    <aside
      style={{
        width: 56,
        flexShrink: 0,
        background: 'rgba(4,5,6,0.92)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: `1px solid ${bd}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: 2,
          width: '100%',
          background: `linear-gradient(90deg,transparent,${AC},#00A8CC,transparent)`,
          opacity: 0.7,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${bd}`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: 'rgba(0,206,176,0.10)',
            border: '1px solid rgba(0,206,176,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(0,206,176,0.18)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2" strokeLinecap="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="1" fill={AC} stroke="none" />
          </svg>
        </div>
      </div>
      <nav
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px 0',
          gap: 2,
          scrollbarWidth: 'none',
        }}
      >
        {NAV.map((item) => {
          const isAct = active === item.id
          return (
            <div
              key={item.id}
              title={item.id}
              onClick={() => setActive(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(item.id)}
              style={{
                position: 'relative',
                width: 40,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                cursor: 'pointer',
                background: isAct ? 'rgba(0,206,176,0.10)' : 'transparent',
                border: isAct ? '1px solid rgba(0,206,176,0.18)' : '1px solid transparent',
                color: isAct ? AC : t4,
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                if (!isAct) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.color = t2
                }
              }}
              onMouseLeave={(e) => {
                if (!isAct) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = t4
                }
              }}
            >
              {isAct && (
                <div
                  style={{
                    position: 'absolute',
                    left: -1,
                    top: '24%',
                    bottom: '24%',
                    width: 2.5,
                    background: AC,
                    borderRadius: '0 2px 2px 0',
                    boxShadow: `0 0 8px ${AC}`,
                  }}
                />
              )}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {item.paths.map((d, j) => (
                  <path key={j} d={d} />
                ))}
                {item.extra === 'camera' && (
                  <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
                )}
              </svg>
              {item.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: 3,
                    right: 3,
                    minWidth: 14,
                    height: 14,
                    borderRadius: 7,
                    padding: '0 3px',
                    background: `${item.badgeCol}28`,
                    color: item.badgeCol,
                    fontSize: 8,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${item.badgeCol}44`,
                  }}
                >
                  {item.badge}
                </div>
              )}
            </div>
          )
        })}
      </nav>
      <div
        style={{
          padding: '10px 0 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          borderTop: `1px solid ${bd}`,
          width: '100%',
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: AC,
            animation: 'pglow 2s ease-in-out infinite',
            boxShadow: `0 0 8px ${AC}`,
          }}
        />
        <div
          style={{
            width: 40,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            cursor: 'pointer',
            color: t4,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = t2)}
          onMouseLeave={(e) => (e.currentTarget.style.color = t4)}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </div>
      </div>
    </aside>
  )
}
