export default function Ico({ p, w = 14, h = 14, col = 'currentColor', sw = 1.8, extra = null }) {
  const paths = Array.isArray(p) ? p : [p]
  return (
    <svg width={w} height={h} viewBox="0 0 24 24" fill="none" stroke={col} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {extra === 'camera' && (
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      )}
    </svg>
  )
}
