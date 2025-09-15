"use client"
import React from 'react'
import type { Sections, Priority } from '@/types/psc'

type Props = { sections: Sections }

const PRIOS: Priority[] = ['essential', 'optional', 'advanced']
const LABEL: Record<Priority, string> = { essential: 'Essencial', optional: 'Opcional', advanced: 'Avançado' }
const COLOR: Record<Priority, string> = {
  essential: '#00ff41',
  optional: '#94a3b8',
  advanced: '#eab308',
}

export default function PriorityDashboard({ sections }: Props) {
  const [done, setDone] = React.useState<Record<Priority, number>>({ essential: 0, optional: 0, advanced: 0 })
  const [total, setTotal] = React.useState<Record<Priority, number>>({ essential: 0, optional: 0, advanced: 0 })

  React.useEffect(() => {
    const tot: Record<Priority, number> = { essential: 0, optional: 0, advanced: 0 }
    const dn: Record<Priority, number> = { essential: 0, optional: 0, advanced: 0 }
    sections.forEach((s) => {
      s.checklist.forEach((item, idx) => {
        const p = item.priority as Priority
        if (!PRIOS.includes(p)) return
        tot[p]++
        try {
          const raw = localStorage.getItem(`psc:${s.slug}:checks`)
          const obj = raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
          if (obj[idx]) dn[p]++
        } catch {}
      })
    })
    setTotal(tot)
    setDone(dn)
  }, [sections])

  // Semicircular gauge (arc) like the original
  const Gauge = ({ pct, color }: { pct: number; color: string }) => {
    // Arc from 180deg to 0deg
    const cx = 60, cy = 60, r = 42
    const start = { x: cx - r, y: cy }
    const end = { x: cx + r, y: cy }
    const clamped = Math.max(0, Math.min(100, pct))
    const angle = Math.PI * (1 - clamped / 100) // PI..0
    const x = cx + r * Math.cos(angle)
    const y = cy - r * Math.sin(angle)
    const pathBg = `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`
    const pathFg = `M ${start.x} ${start.y} A ${r} ${r} 0 ${clamped > 50 ? 1 : 0} 1 ${x} ${y}`
    return (
      <svg width="120" height="80" viewBox="0 0 120 80">
        <path d={pathBg} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d={pathFg} stroke={color} strokeWidth="10" fill="none" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {PRIOS.map((p) => {
        const t = total[p] || 0
        const d = done[p] || 0
        const pct = t ? Math.round((d / t) * 100) : 0
        return (
          <div key={p} className="card-glass rounded-xl p-4 flex flex-col items-center gap-2">
            <Gauge pct={pct} color={COLOR[p]} />
            <div className="text-base font-semibold" style={{ color: COLOR[p] }}>{LABEL[p]}</div>
            <div className="text-xs text-text-muted">{d}/{t} itens</div>
          </div>
        )
      })}
    </div>
  )
}
