import { FACTORY_STATUS, S } from '../constants'

function BigStat({ value, label, color, sub, accentClass }) {
  return (
    <div className={`panel ${accentClass}`} style={{ flex:1, padding:'12px 14px', borderRadius:0 }}>
      <div className="mono" style={{ fontSize:32, fontWeight:700, color, lineHeight:1, marginBottom:3 }}>{value}</div>
      <div style={{ fontSize:11.5, color:S.t1, fontWeight:600, marginBottom:1 }}>{label}</div>
      <div style={{ fontSize:9.5, color:S.t3 }}>{sub}</div>
    </div>
  )
}

export default function FactoryStatusBar() {
  const { workersActive, workersIdle, machinesOk, machinesStopped, alertsToday } = FACTORY_STATUS
  return (
    <div style={{ display:'flex', gap:6, marginBottom:8 }}>
      <BigStat value={workersActive}   label="Workers Active"   color={S.green} sub="on floor now"      accentClass="panel-hd-green" />
      <BigStat value={workersIdle}     label="Workers Idle"     color={S.amber} sub="need attention"    accentClass="panel-hd-amber" />
      <BigStat value={machinesOk}      label="Machines Running" color={S.blue}  sub="nominal load"      accentClass="panel-hd-accent" />
      <BigStat value={machinesStopped} label="Machines Stopped" color={S.red}   sub="requires action"   accentClass="panel-hd-red" />
      <BigStat value={alertsToday}     label="Alerts Today"     color={S.red}   sub="since shift start" accentClass="panel-hd-red" />
    </div>
  )
}
