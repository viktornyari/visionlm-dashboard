import { useRef, useEffect } from 'react'
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler } from 'chart.js'
import { MACHINE_DATA, AC, AC2, ACB, AMB, RED, t1, t2, t3, t4, bd, CARD2 } from '../constants'
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler)

function KwSpark() {
  const ref = useRef(); const ch = useRef()
  useEffect(() => {
    if (!ref.current) return
    ch.current?.destroy()
    const ctx = ref.current.getContext('2d')
    const g = ctx.createLinearGradient(0,0,0,32)
    g.addColorStop(0, `${AMB}44`); g.addColorStop(1, `${AMB}00`)
    ch.current = new Chart(ctx, {
      type:'line',
      data:{ labels: MACHINE_DATA.sparkKw.map((_,i)=>i), datasets:[{ data:MACHINE_DATA.sparkKw, fill:true, backgroundColor:g, borderColor:AMB, borderWidth:1.5, pointRadius:0, tension:0.4 }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{enabled:false}}, scales:{x:{display:false},y:{display:false}}, animation:{duration:600} }
    })
    return () => ch.current?.destroy()
  }, [])
  return <div style={{height:32,width:'100%'}}><canvas ref={ref}/></div>
}

export default function MachineOeeCard({ highlight }) {
  const { activePercent, currentKw, expectedKw, overloadEvents } = MACHINE_DATA
  const loadRatio = Math.round((currentKw / expectedKw) * 100)
  const hl = { outline: highlight ? '1px solid rgba(0,206,176,0.25)' : 'none', boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.06)' : 'none', transition:'outline 0.3s,box-shadow 0.3s' }

  return (
    <div className="glass" style={{ padding:'14px 16px', ...hl }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:6 }}>
          <div style={{ width:5, height:5, borderRadius:'50%', background:AMB, boxShadow:`0 0 6px ${AMB}` }}/>
          <span style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:12.5, fontWeight:700, color:t1 }}>Machine OEE</span>
        </div>
        <span style={{ fontSize:9, color:t4, textTransform:'uppercase', letterSpacing:0.8 }}>IoT · Shelly 3EM</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:10 }}>
        <div style={{ background:CARD2, border:`1px solid ${bd}`, borderRadius:9, padding:'10px 11px' }}>
          <div style={{ fontSize:8.5, color:t4, textTransform:'uppercase', letterSpacing:0.5, marginBottom:4 }}>Machine Active</div>
          <div style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:24, fontWeight:800, color: activePercent>=75?AC:AMB, lineHeight:1 }}>{activePercent}%</div>
          <div style={{ height:3, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden', marginTop:6 }}>
            <div style={{ height:'100%', width:`${activePercent}%`, background:activePercent>=75?AC:AMB, borderRadius:2, transition:'width 1.2s ease' }}/>
          </div>
          <div style={{ fontSize:9, color:t4, marginTop:4 }}>Target: 85%</div>
        </div>
        <div style={{ background:CARD2, border:`1px solid ${bd}`, borderRadius:9, padding:'10px 11px' }}>
          <div style={{ fontSize:8.5, color:t4, textTransform:'uppercase', letterSpacing:0.5, marginBottom:4 }}>Motor Load</div>
          <div style={{ display:'flex', alignItems:'baseline', gap:3 }}>
            <span style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:24, fontWeight:800, color:AMB, lineHeight:1 }}>{currentKw}</span>
            <span style={{ fontSize:11, color:t4 }}>kW</span>
          </div>
          <div style={{ height:3, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden', marginTop:6 }}>
            <div style={{ height:'100%', width:`${loadRatio}%`, background:loadRatio>95?RED:AMB, borderRadius:2, transition:'width 1.2s ease' }}/>
          </div>
          <div style={{ fontSize:9, color:t4, marginTop:4 }}>Expected: {expectedKw} kW</div>
        </div>
      </div>

      <div style={{ marginBottom:8 }}>
        <div style={{ fontSize:9, color:t4, marginBottom:4 }}>Motor kW — last 10 readings</div>
        <KwSpark/>
      </div>

      <div style={{ display:'flex', gap:7, paddingTop:8, borderTop:`1px solid ${bd}` }}>
        <div style={{ flex:1, padding:'6px 8px', background:overloadEvents>0?'rgba(255,96,96,0.07)':CARD2, border:`1px solid ${overloadEvents>0?'rgba(255,96,96,0.2)':bd}`, borderRadius:7 }}>
          <div style={{ fontSize:8, color:t4, textTransform:'uppercase', letterSpacing:0.5, marginBottom:2 }}>Overload Events</div>
          <div style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:15, fontWeight:800, color:overloadEvents>0?RED:AC }}>{overloadEvents} <span style={{ fontSize:9, fontWeight:400, color:t4 }}>today</span></div>
        </div>
        <div style={{ flex:1, padding:'6px 8px', background:CARD2, border:`1px solid ${bd}`, borderRadius:7 }}>
          <div style={{ fontSize:8, color:t4, textTransform:'uppercase', letterSpacing:0.5, marginBottom:2 }}>Motor Protection</div>
          <div style={{ display:'flex', alignItems:'center', gap:4 }}>
            <div style={{ width:5, height:5, borderRadius:'50%', background:AC }}/>
            <span style={{ fontSize:10.5, color:AC, fontWeight:600 }}>Active</span>
          </div>
        </div>
        <div style={{ flex:1.4, padding:'6px 8px', background:CARD2, border:`1px solid ${bd}`, borderRadius:7 }}>
          <div style={{ fontSize:8, color:t4, textTransform:'uppercase', letterSpacing:0.5, marginBottom:2 }}>Patterns learned</div>
          <div style={{ fontFamily:"'IBM Plex Sans',sans-serif", fontSize:15, fontWeight:700, color:AC2 }}>1,247</div>
        </div>
      </div>

      <div style={{ marginTop:8, padding:'7px 10px', background:'rgba(0,168,204,0.06)', border:'1px solid rgba(0,168,204,0.14)', borderRadius:7, display:'flex', alignItems:'center', gap:7 }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={AC2} strokeWidth="2" strokeLinecap="round" style={{flexShrink:0}}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        <span style={{ fontSize:9.5, color:t3, lineHeight:1.4 }}>Material input → motor load correlation active. <span style={{color:AC2}}>1,247 events learned →</span></span>
      </div>
    </div>
  )
}
