import { FACTORY_STATUS, S } from '../constants'

function BigStat({ value, label, color, sub }) {
  return (
    <div style={{ flex:1, padding:'12px 14px', background:S.panel, border:`1px solid ${S.border}`, borderRadius:4, borderTop:`2px solid ${color}` }}>
      <div className="mono" style={{ fontSize:32, fontWeight:700, color, lineHeight:1, marginBottom:3 }}>{value}</div>
      <div style={{ fontSize:11, color:S.t1, fontWeight:600, marginBottom:1 }}>{label}</div>
      {sub && <div style={{ fontSize:10, color:S.t3 }}>{sub}</div>}
    </div>
  )
}

export default function FactoryStatusBar() {
  const { workersActive, workersIdle, machinesOk, machinesStopped, alertsToday } = FACTORY_STATUS
  return (
    <div style={{ display:'flex', gap:8, marginBottom:10 }}>
      <BigStat value={workersActive}   label="Workers Active"   color={S.green} sub="on floor now"    />
      <BigStat value={workersIdle}     label="Workers Idle"     color={S.amber} sub="need attention"  />
      <BigStat value={machinesOk}      label="Machines Running" color={S.blue}  sub="nominal load"    />
      <BigStat value={machinesStopped} label="Machines Stopped" color={S.red}   sub="requires action" />
      <BigStat value={alertsToday}     label="Alerts Today"     color={S.red}   sub="since shift start" />
    </div>
  )
}
