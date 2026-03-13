import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import OverviewCard from './components/OverviewCard'
import WorkersCard from './components/WorkersCard'
import SavingsCard from './components/SavingsCard'
import ActivityTable from './components/ActivityTable'
import InsightsPanel from './components/InsightsPanel'

export default function App() {
  const [active, setActive] = useState('Dashboard')
  const [dateOff, setDateOff] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: '#030405',
        overflow: 'hidden',
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      {/* Aurora BG */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,206,176,0.055) 0%, transparent 60%)',
            top: '-25%',
            left: '15%',
            animation: 'blob1 28s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,168,204,0.045) 0%, transparent 60%)',
            bottom: '5%',
            right: '10%',
            animation: 'blob2 38s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,80,160,0.035) 0%, transparent 60%)',
            top: '40%',
            right: '35%',
            animation: 'blob3 50s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.6,
          }}
        />
      </div>

      <Sidebar active={active} setActive={setActive} />

      <div
        style={{
          marginLeft: 56,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          minWidth: 0,
        }}
      >
        <TopBar dateOff={dateOff} setDateOff={setDateOff} />
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 18px 48px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.07) transparent',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr 256px',
              gap: 14,
              alignItems: 'start',
              minWidth: 0,
            }}
          >
            <div className="fu" style={{ animationDelay: '0.06s', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <OverviewCard />
              <WorkersCard />
            </div>
            <div className="fu" style={{ animationDelay: '0.12s', display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
              <SavingsCard />
              <ActivityTable />
            </div>
            <div className="fu" style={{ animationDelay: '0.18s' }}>
              <InsightsPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
