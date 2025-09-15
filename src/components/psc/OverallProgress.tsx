"use client"
import React from 'react'
import type { Sections } from '@/types/psc'

type Props = Readonly<{ sections: Sections }>

export default function OverallProgress({ sections }: Props) {
  const [done, setDone] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    let d = 0
    let t = 0
    sections.forEach((s) => {
      t += s.checklist.length
      const key = `psc:${s.slug}:checks`
      try {
        const raw = localStorage.getItem(key)
        const obj = raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
        d += Object.values(obj).filter(Boolean).length
      } catch {}
    })
    setDone(d)
    setTotal(t)
  }, [sections])

  const pct = total ? Math.round((done / total) * 100) : 0

  return (
    <div className="card-cyber rounded-lg p-5">
      <div className="flex items-center justify-between mb-2 text-sm text-text-muted">
        <span>Progresso geral</span>
        <span className="text-primary/90 font-medium">{done}/{total} · {pct}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded">
        <div className="h-2 bg-primary rounded" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
