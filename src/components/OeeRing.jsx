import { ACB, AC2, t1, t4 } from '../constants'

export default function OeeRing({ pct = 87, sz = 144 }) {
  const r = (sz - 16) / 2
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  const gap = circ - dash
  const uid = `rg${sz}${pct}`

  return (
    <div style={{ position: 'relative', width: sz, height: sz, flexShrink: 0 }}>
      <svg width={sz} height={sz} style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={ACB} />
            <stop offset="100%" stopColor={AC2} />
          </linearGradient>
          <filter id={`gf${sz}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="10" />
        <circle
          cx={sz / 2}
          cy={sz / 2}
          r={r}
          fill="none"
          stroke={`url(#${uid})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          filter={`url(#gf${sz})`}
          style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(.4,0,.2,1)' }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <span
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 26,
            fontWeight: 800,
            color: t1,
            lineHeight: 1,
            background: `linear-gradient(135deg,${ACB},${AC2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {pct}%
        </span>
        <span style={{ fontSize: 8.5, color: t4, textTransform: 'uppercase', letterSpacing: 1.2 }}>OEE Score</span>
      </div>
    </div>
  )
}
