import { useState, useMemo } from 'react'
import { ROI_DEFAULTS, AC, ACB, AC2, AMB, RED, t1, t2, t3, t4, bd, CARD2 } from '../constants'

function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return Math.round(n / 1000) + 'k'
  return String(Math.round(n))
}

function Slider({ label, value, set, min, max, step, display }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div style={{ marginBottom: 9 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: t3 }}>{label}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: t2 }}>{display(value)}</span>
      </div>
      <div style={{ position: 'relative', height: 16, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
        <div style={{ position: 'absolute', left: 0, width: `${pct}%`, height: 3, background: `linear-gradient(90deg, ${AC2}, ${AC})`, borderRadius: 2, transition: 'width 0s' }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => set(Number(e.target.value))}
          style={{ position: 'absolute', left: 0, right: 0, width: '100%', opacity: 0, height: 16, cursor: 'pointer', margin: 0 }}
        />
        <div style={{ position: 'absolute', left: `calc(${pct}% - 6px)`, width: 12, height: 12, borderRadius: '50%', background: AC, border: '2px solid rgba(3,4,5,0.9)', boxShadow: `0 0 8px ${AC}88`, pointerEvents: 'none', transition: 'left 0s' }} />
      </div>
    </div>
  )
}

export default function RoiCalculator({ highlight }) {
  const [hc, setHc]         = useState(ROI_DEFAULTS.headcount)
  const [wage, setWage]     = useState(ROI_DEFAULTS.avgWage)
  const [shifts, setShifts] = useState(ROI_DEFAULTS.shifts)
  const [idle, setIdle]     = useState(ROI_DEFAULTS.idlePct)
  const [impr, setImpr]     = useState(ROI_DEFAULTS.improvePct)

  const { lostMonth, savedMonth, savedYear, roiMonths } = useMemo(() => {
    const total    = hc * wage * shifts
    const lostMonth  = Math.round(total * (idle / 100))
    const savedMonth = Math.round(total * (impr / 100))
    const savedYear  = savedMonth * 12
    const roiMonths  = Math.ceil(4000000 / Math.max(savedMonth, 1))
    return { lostMonth, savedMonth, savedYear, roiMonths }
  }, [hc, wage, shifts, idle, impr])

  const hl = {
    outline: highlight ? '1px solid rgba(0,206,176,0.28)' : 'none',
    boxShadow: highlight ? '0 0 0 3px rgba(0,206,176,0.07)' : 'none',
    transition: 'outline 0.3s, box-shadow 0.3s',
  }

  return (
    <div className="glass" style={{ padding: '14px 16px', ...hl }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, fontWeight: 700, color: t1, display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={AC} strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          ROI Calculator
        </div>
        <span style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.7 }}>Rejtett üresjárat</span>
      </div>

      {/* Sliders */}
      <Slider label="Workers on shift"    value={hc}     set={setHc}     min={5}      max={300}     step={5}      display={v => `${v} workers`} />
      <Slider label="Avg gross wage / mo" value={wage}   set={setWage}   min={300000} max={1200000} step={50000}  display={v => `${Math.round(v/1000)}k Ft`} />
      <Slider label="Shifts per day"      value={shifts} set={setShifts} min={1}      max={3}       step={1}      display={v => `${v} shift${v>1?'s':''}`} />
      <Slider label="Current idle rate"   value={idle}   set={setIdle}   min={1}      max={20}      step={0.5}    display={v => `${v}%`} />
      <Slider label="Expected improvement" value={impr}  set={setImpr}   min={1}      max={10}      step={0.5}    display={v => `${v}%`} />

      {/* Divider */}
      <div style={{ height: 1, background: bd, margin: '10px 0' }} />

      {/* Two result chips */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 9 }}>
        <div style={{ background: 'rgba(255,96,96,0.05)', border: '1px solid rgba(255,96,96,0.13)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 3 }}>Hidden loss / mo</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 16, fontWeight: 800, color: RED, lineHeight: 1 }}>{fmt(lostMonth)} Ft</div>
          <div style={{ fontSize: 8.5, color: t4, marginTop: 2 }}>at {idle}% idle</div>
        </div>
        <div style={{ background: 'rgba(0,206,176,0.05)', border: '1px solid rgba(0,206,176,0.16)', borderRadius: 8, padding: '8px 10px' }}>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 3 }}>Recoverable / mo</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 16, fontWeight: 800, color: AC, lineHeight: 1 }}>{fmt(savedMonth)} Ft</div>
          <div style={{ fontSize: 8.5, color: t4, marginTop: 2 }}>at {impr}% gain</div>
        </div>
      </div>

      {/* Annual hero */}
      <div style={{ background: 'rgba(0,206,176,0.05)', border: '1px solid rgba(0,206,176,0.16)', borderRadius: 10, padding: '11px 13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 3 }}>Annual saving</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14, fontWeight: 900, background: `linear-gradient(135deg,${ACB},${AC2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, whiteSpace: 'nowrap' }}>
            + {savedYear.toLocaleString()} Ft
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 8.5, color: t4, marginBottom: 2 }}>ROI payback</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 18, fontWeight: 800, color: roiMonths <= 12 ? AC : AMB }}>
            {roiMonths} mo
          </div>
          {roiMonths <= 12 && <div style={{ fontSize: 8, color: AC, marginTop: 1 }}>Under 12 months ✓</div>}
        </div>
      </div>
      <div style={{ marginTop: 8, fontSize: 8.5, color: t4, lineHeight: 1.6 }}>
        Workforce savings only. Add energy optimisation for +2.6–3M Ft/yr.
      </div>
    </div>
  )
}
