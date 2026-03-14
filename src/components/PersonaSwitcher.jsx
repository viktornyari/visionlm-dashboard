import { PERSONAS, AC, t1, t2, t3, t4, bd } from '../constants'

export default function PersonaSwitcher({ persona, setPersona }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 20px', borderBottom:`1px solid ${bd}`, background:'rgba(3,4,5,0.75)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', flexShrink:0, flexWrap:'wrap' }}>
      <span style={{ fontSize:9, color:t4, textTransform:'uppercase', letterSpacing:1.2, marginRight:2, whiteSpace:'nowrap' }}>View as</span>
      {PERSONAS.map((p) => {
        const on = persona === p.id
        return (
          <button key={p.id} type="button" onClick={() => setPersona(p.id)}
            style={{ display:'flex', alignItems:'center', gap:5, padding:'4px 11px', borderRadius:20, border: on ? '1px solid rgba(0,206,176,0.30)' : `1px solid ${bd}`, background: on ? 'rgba(0,206,176,0.10)' : 'transparent', color: on ? AC : t3, fontSize:10.5, fontWeight: on ? 600 : 400, cursor:'pointer', transition:'all 0.15s', whiteSpace:'nowrap' }}
            onMouseEnter={e => { if(!on){e.currentTarget.style.borderColor='rgba(255,255,255,0.12)';e.currentTarget.style.color=t2} }}
            onMouseLeave={e => { if(!on){e.currentTarget.style.borderColor=bd;e.currentTarget.style.color=t3} }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={p.icon}/></svg>
            {p.label}
          </button>
        )
      })}
      <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:5 }}>
        <div style={{ width:5, height:5, borderRadius:'50%', background:AC, animation:'pglow 2s ease-in-out infinite' }}/>
        <span style={{ fontSize:9, color:t4 }}>Live · 14:32:07</span>
      </div>
    </div>
  )
}
