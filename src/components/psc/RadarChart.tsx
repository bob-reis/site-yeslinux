"use client"
import React from 'react'
import type { Sections } from '@/types/psc'

type Props = Readonly<{ sections: Sections }>

export default function RadarChart({ sections }: Props) {
  // Compute percent done per section
  const [percents, setPercents] = React.useState<number[]>([])
  const wrapRef = React.useRef<HTMLDivElement | null>(null)
  const [size, setSize] = React.useState(380)

  React.useEffect(() => {
    const arr = sections.map((s) => {
      const total = s.checklist.length || 1
      let done = 0
      try {
        const raw = localStorage.getItem(`psc:${s.slug}:checks`)
        const obj = raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
        done = Object.values(obj).filter(Boolean).length
      } catch {}
      return Math.round((done / total) * 100)
    })
    setPercents(arr)
  }, [sections])

  // Responsive: fill available width (with min/max)
  React.useEffect(() => {
    if (!wrapRef.current || typeof ResizeObserver === 'undefined') return
    const obs = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width || 380
      // Leave some breathing space inside the card
      const next = Math.max(320, Math.min(540, Math.floor(w - 24)))
      setSize(next)
    })
    obs.observe(wrapRef.current)
    return () => obs.disconnect()
  }, [])

  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.30
  const levels = [25, 50, 75, 100]
  const count = Math.max(1, sections.length)

  const angleFor = (i: number) => (Math.PI * 2 * i) / count - Math.PI / 2
  const point = (pct: number, i: number) => {
    const r = (pct / 100) * radius
    const a = angleFor(i)
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    return `${x},${y}`
  }

  const polygon = percents.length
    ? percents.map((p, i) => point(p, i)).join(' ')
    : ''

  return (
    <div ref={wrapRef} className="card-glass rounded-xl p-6 md:p-8 flex items-center justify-center" style={{ overflow: 'visible' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label="Gráfico de radar de progresso por seção">
        {/* Grid levels */}
        {levels.map((lv, idx) => (
          <polygon
            key={lv}
            points={Array.from({ length: count }, (_, i) => point(lv, i)).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
          />
        ))}
        {/* Axes */}
        {Array.from({ length: count }, (_, i) => (
          <line
            key={`axis-${i}`}
            x1={cx}
            y1={cy}
            x2={cx + radius * Math.cos(angleFor(i))}
            y2={cy + radius * Math.sin(angleFor(i))}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={1}
          />
        ))}
        {/* Percent labels */}
        {levels.map((lv) => (
          <text key={`lvl-${lv}`} x={cx} y={cy - (lv / 100) * radius} fill="rgba(255,255,255,0.6)" fontSize={Math.max(9, Math.round(size * 0.028))} textAnchor="middle" dy={-2}>
            {lv}%
          </text>
        ))}
        {/* Section labels around */}
        {sections.map((s, i) => {
          const a = angleFor(i)
          // Place labels OUTSIDE the radar with a small font
          // Bring labels closer to the polygon (~50% of previous distance)
          const offset = Math.max(12, size * 0.06)
          const lx = cx + (radius + offset) * Math.cos(a)
          const ly = cy + (radius + offset) * Math.sin(a)
          const cos = Math.cos(a)
          let anchor: 'start' | 'end' | 'middle' = 'middle'
          if (cos > 0.35) anchor = 'start'
          else if (cos < -0.35) anchor = 'end'
          const fs = Math.max(8, Math.round(size * 0.022))
          const words = s.title.split(' ')
          let line1 = ''
          let line2 = ''
          for (const w of words) {
            if ((line1 + ' ' + w).trim().length <= 12 || line1.length === 0) line1 = (line1 + ' ' + w).trim()
            else line2 = (line2 + ' ' + w).trim()
          }
          // Slight vertical lift for two-line labels
          const dy1 = line2 ? -2 : 0
          return (
            <text key={`lbl-${s.slug}`} x={lx} y={ly} fill="rgba(255,255,255,0.75)" fontSize={fs} textAnchor={anchor as any}>
              <tspan x={lx} dy={dy1}>{line1}</tspan>
              {line2 && <tspan x={lx} dy={fs * 1.1}>{line2}</tspan>}
            </text>
          )
        })}
        {/* Data polygon */}
        {polygon && (
          <polygon points={polygon} fill="rgba(0,255,65,0.18)" stroke="#00ff41" strokeWidth={2} />
        )}
        {/* Center point */}
        <circle cx={cx} cy={cy} r={3} fill="#00ff41" />
      </svg>
    </div>
  )
}
