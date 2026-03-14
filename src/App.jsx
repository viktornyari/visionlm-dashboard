import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PersonaSwitcher from './components/PersonaSwitcher'
import OverviewCard from './components/OverviewCard'
import WorkersCard from './components/WorkersCard'
import MachineOeeCard from './components/MachineOeeCard'
import SavingsCard from './components/SavingsCard'
import LossSourcesCard from './components/LossSourcesCard'
import ActivityTable from './components/ActivityTable'
import RoiCalculator from './components/RoiCalculator'
import GatingPanel from './components/GatingPanel'
import InsightsPanel from './components/InsightsPanel'

const FOCUS = {
  owner:   new Set(['savings', 'loss', 'roi']),
  manager: new Set(['overview', 'workers', 'activity']),
  maint:   new Set(['machine', 'gating']),
}
const hl = (persona, key) => FOCUS[persona]?.has(key) ?? false

const AuroraBG = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,206,176,0.055) 0%, transparent 60%)', top: '-25%', left: '15%', animation: 'blob1 28s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,168,204,0.045) 0%, transparent 60%)', bottom: '5%', right: '10%', animation: 'blob2 38s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,160,0.035) 0%, transparent 60%)', top: '40%', right: '35%', animation: 'blob3 50s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.6 }} />
  </div>
)

export default function App() {
  const [active, setActive]           = useState('Dashboard')
  const [dateOff, setDateOff]         = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [persona, setPersona]         = useState('owner')

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#030405', overflow: 'hidden', fontFamily: "'DM Sans',sans-serif" }}>
      <AuroraBG />

      <Sidebar active={active} setActive={setActive} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="dashboard-main">
        <TopBar dateOff={dateOff} setDateOff={setDateOff} onMenuClick={() => setSidebarOpen(o => !o)} />
        <PersonaSwitcher persona={persona} setPersona={setPersona} />

        <div className="dashboard-scroll">
          <div className="dashboard-grid">

            {/* LEFT — overview, workers, machine OEE */}
            <div className="dashboard-col-left fu" style={{ animationDelay: '0.06s', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <OverviewCard   highlight={hl(persona, 'overview')} />
              <WorkersCard    highlight={hl(persona, 'workers')} />
              <MachineOeeCard highlight={hl(persona, 'machine')} />
            </div>

            {/* MIDDLE — savings, top-5 losses, activity */}
            <div className="dashboard-col-middle fu" style={{ animationDelay: '0.12s', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
              <SavingsCard     highlight={hl(persona, 'savings')} />
              <LossSourcesCard highlight={hl(persona, 'loss')} />
              <ActivityTable   highlight={hl(persona, 'activity')} />
            </div>

            {/* RIGHT — ROI calculator, gating, modules */}
            <div className="dashboard-col-right fu" style={{ animationDelay: '0.18s', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <RoiCalculator highlight={hl(persona, 'roi')} />
              <GatingPanel   highlight={hl(persona, 'gating')} />
              <InsightsPanel />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
