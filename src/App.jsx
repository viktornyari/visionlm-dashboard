import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import FactoryStatusBar from './components/FactoryStatusBar'
import CameraWall from './components/CameraWall'
import EventFeed from './components/EventFeed'
import WorkerScoreboard from './components/WorkerScoreboard'
import MachineStatus from './components/MachineStatus'

export default function App() {
  const [active, setActive]           = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div style={{ display:'flex', height:'100vh', background:'#1a1c1a', overflow:'hidden', fontFamily:"'DM Sans',sans-serif" }}>
      <Sidebar active={active} setActive={setActive} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      <div className="dashboard-main">
        <TopBar onMenuClick={() => setSidebarOpen(o => !o)}/>

        <div className="dashboard-scroll">
          {/* Row 1 — Factory Status (big numbers) */}
          <div className="fu" style={{ animationDelay:'0.04s' }}>
            <FactoryStatusBar/>
          </div>

          {/* Row 2 — Camera wall + Event feed */}
          <div className="cam-events-row fu" style={{ animationDelay:'0.10s' }}>
            <CameraWall/>
            <EventFeed/>
          </div>

          {/* Row 3 — Worker scoreboard + Machine status */}
          <div className="bottom-row fu" style={{ animationDelay:'0.18s' }}>
            <WorkerScoreboard/>
            <MachineStatus/>
          </div>
        </div>
      </div>
    </div>
  )
}
