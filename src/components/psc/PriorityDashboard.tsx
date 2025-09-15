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

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {PRIOS.map((p) => {
        const t = total[p] || 0
        const d = done[p] || 0
        const pct = t ? Math.round((d / t) * 100) : 0
        const r = 34 // radius
        const c = 2 * Math.PI * r
        const offset = c - (pct / 100) * c
        return (
          <div key={p} className="card-cyber rounded-lg p-4 flex items-center gap-4">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
              <circle
                cx="45"
                cy="45"
                r={r}
                stroke={COLOR[p]}
                strokeWidth="8"
                strokeDasharray={`${c} ${c}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="none"
              />
              <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill={COLOR[p]}>{pct}%</text>
            </svg>
            <div>
              <div className="text-sm text-text-muted">{LABEL[p]}</div>
              <div className="text-lg font-semibold" style={{ color: COLOR[p] }}>{d}/{t}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

