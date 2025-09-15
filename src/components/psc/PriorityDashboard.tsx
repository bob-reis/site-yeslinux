"use client"
import React from 'react'
import type { Sections, Priority } from '@/types/psc'
import Gauge from '@/components/psc/Gauge'

type Props = Readonly<{ sections: Sections }>

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
        const p: Priority = item.priority
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

  // Gauge moved to separate component

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
