"use client"
import React from 'react'
import type { Sections } from '@/types/psc'
import PscIcon from '@/components/psc/PscIcon'

type Props = { sections: Sections }

export default function SectionProgressList({ sections }: Props) {
  const [state, setState] = React.useState<Record<string, number>>({})

  React.useEffect(() => {
    const s: Record<string, number> = {}
    sections.forEach((sec) => {
      try {
        const raw = localStorage.getItem(`psc:${sec.slug}:checks`)
        const obj = raw ? (JSON.parse(raw) as Record<string, boolean>) : {}
        s[sec.slug] = Object.values(obj).filter(Boolean).length
      } catch { s[sec.slug] = 0 }
    })
    setState(s)
  }, [sections])

  const colorMap: Record<string, string> = {
    yellow: '#facc15', emerald: '#10b981', teal: '#14b8a6', cyan: '#06b6d4', blue: '#3b82f6',
    violet: '#8b5cf6', fuchsia: '#d946ef', red: '#ef4444', purple: '#a855f7', indigo: '#6366f1', lime: '#84cc16',
  }

  return (
    <div className="card-glass rounded-xl p-4">
      <ul className="space-y-2">
        {sections.map((sec) => {
          const col = colorMap[sec.color] || '#00ff41'
          const done = state[sec.slug] || 0
          const total = sec.checklist.length
          const pct = total ? Math.round((done / total) * 100) : 0
          return (
            <li key={sec.slug} className="flex items-center gap-2 text-sm">
              <PscIcon name={sec.icon} color={col} size={16} />
              <a href={`/tools/personal-security-checklist/${sec.slug}`} className="flex-1 hover:underline truncate" style={{ color: col }}>
                {sec.title}
              </a>
              <div className="w-2/5">
                <div className="h-1.5 bg-white/10 rounded overflow-hidden">
                  <div className="h-1.5 rounded bar-animate" style={{ width: `${pct}%`, background: col }} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
