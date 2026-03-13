import { bd, CARD, t1, t2, t3, t4, t5 } from '../constants'

export default function TopBar({ dateOff, setDateOff, onMenuClick }) {
  const d = new Date('2024-01-15')
  d.setDate(d.getDate() + dateOff)
  const ds = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <header
      className="dashboard-topbar"
      style={{
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: `1px solid ${bd}`,
        background: 'rgba(3,4,5,0.9)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        flexShrink: 0,
        gap: 12,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          type="button"
          className="nb dashboard-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle menu"
          style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, color: t1 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 700, color: t1 }}>Dashboard</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t3} strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div
        className="dashboard-topbar-search"
        style={{
          flex: 1,
          maxWidth: 440,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: CARD,
          border: `1px solid ${bd}`,
          borderRadius: 10,
          padding: '7px 14px',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t3} strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          placeholder="Search persons, zones, events…"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            flex: 1,
            color: t1,
            fontSize: 12.5,
            fontFamily: "'DM Sans',sans-serif",
          }}
        />
        <div
          style={{
            padding: '2px 7px',
            borderRadius: 5,
            background: t5,
            border: `1px solid ${bd}`,
            fontSize: 9.5,
            color: t4,
            fontFamily: 'monospace',
          }}
        >
          ⌘K
        </div>
      </div>
      <div className="dashboard-topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: CARD,
              border: `1px solid ${bd}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: t2,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: 16,
              height: 16,
              borderRadius: 8,
              background: 'linear-gradient(135deg,#F0A832,#E07020)',
              border: '2px solid #030405',
              fontSize: 8.5,
              fontWeight: 800,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            3
          </div>
        </div>
        <div className="dashboard-topbar-date" style={{ display: 'flex', alignItems: 'center', background: CARD, border: `1px solid ${bd}`, borderRadius: 9, overflow: 'hidden' }}>
          <button
            type="button"
            className="nb"
            onClick={() => setDateOff((p) => p - 1)}
            style={{
              width: 30,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: t3,
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t1)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t3)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div
            style={{
              padding: '0 10px',
              fontSize: 11.5,
              fontWeight: 500,
              color: t2,
              whiteSpace: 'nowrap',
              borderLeft: `1px solid ${bd}`,
              borderRight: `1px solid ${bd}`,
              lineHeight: '34px',
            }}
          >
            {ds}
          </div>
          <button
            type="button"
            className="nb"
            onClick={() => setDateOff((p) => p + 1)}
            style={{
              width: 30,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: t3,
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = t1)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t3)}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div
          className="dashboard-topbar-profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '4px 10px 4px 6px',
            background: CARD,
            border: `1px solid ${bd}`,
            borderRadius: 9,
            cursor: 'pointer',
          }}
        >
          <img
            src="https://i.pravatar.cc/64?img=33"
            alt="admin"
            style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' }}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="dashboard-topbar-profile-text">
            <div style={{ fontSize: 11.5, fontWeight: 600, color: t1, lineHeight: 1.2 }}>Facility Admin</div>
            <div style={{ fontSize: 9.5, color: t4 }}>@admin</div>
          </div>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={t3} strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </header>
  )
}
