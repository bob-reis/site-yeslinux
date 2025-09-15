"use client"
import React from 'react'

type GaugeProps = Readonly<{ pct: number; color: string }>

export default function Gauge({ pct, color }: GaugeProps) {
  const clamped = Math.max(0, Math.min(100, pct))
  const [val, setVal] = React.useState(0)
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setVal(clamped))
    return () => cancelAnimationFrame(id)
  }, [clamped])

  const cx = 60, cy = 60, r = 42
  const start = { x: cx - r, y: cy }
  const end = { x: cx + r, y: cy }
  const path = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`

  return (
    <svg width="120" height="80" viewBox="0 0 120 80">
      <path d={path} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" strokeLinecap="round" pathLength={100} />
      <path
        d={path}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="100"
        strokeDashoffset={100 - val}
        className="stroke-animate"
      />
    </svg>
  )
}

