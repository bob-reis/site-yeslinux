"use client"
import React from 'react'
import type { Sections } from '@/types/psc'
import PscIcon from '@/components/psc/PscIcon'

type Props = { sections: Sections }

export default function SectionLinkGrid({ sections }: Props) {
  const [progress, setProgress] = React.useState<Record<string, { done: number; total: number }>>({})

  React.useEffect(() => {
    const p: Record<string, { done: number; total: number }> = {}
    sections.forEach((s) => {
      const key = `psc:${s.slug}:checks`
      let done = 0
      try {
        const raw = localStorage.getItem(key)
        const obj = raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
        done = Object.values(obj).filter(Boolean).length
      } catch {}
      p[s.slug] = { done, total: s.checklist.length }
    })
    setProgress(p)
  }, [sections])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((s) => {
        const stat = progress[s.slug] || { done: 0, total: s.checklist.length }
        const pct = s.checklist.length ? Math.round((stat.done / stat.total) * 100) : 0
        const colorMap: Record<string, string> = {
          yellow: '#facc15', emerald: '#10b981', teal: '#14b8a6', cyan: '#06b6d4', blue: '#3b82f6',
          violet: '#8b5cf6', fuchsia: '#d946ef', red: '#ef4444', purple: '#a855f7', indigo: '#6366f1', lime: '#84cc16',
        }
        const col = colorMap[s.color] || '#00ff41'
        return (
          <a
            key={s.slug}
            href={`/tools/personal-security-checklist/${s.slug}`}
            className="card-glass rounded-xl p-5 hover:shadow-lg transition-shadow"
            style={{ borderLeft: `4px solid ${col}` }}
          >
            <div className="flex items-start gap-3 mb-2">
              <PscIcon name={s.icon} color={col} size={22} />
              <h3 className="text-lg font-semibold" style={{ color: col }}>{s.title}</h3>
            </div>
            <p className="text-text-muted text-sm mb-3">{s.description}</p>
            <div className="text-xs text-text-muted flex items-center justify-between">
              <span>{stat.done}/{stat.total} concluídos</span>
              <span className="font-medium" style={{ color: col }}>{pct}%</span>
            </div>
            <div className="mt-1 h-1.5 bg-white/10 rounded overflow-hidden">
              <div className="h-1.5 rounded bar-animate" style={{ width: `${pct}%`, background: col }} />
            </div>
          </a>
        )
      })}
    </div>
  )
}
