"use client"
import React from 'react'
import type { Section } from '@/types/psc'
import PriorityBadge from '@/components/psc/PriorityBadge'
import PscIcon from '@/components/psc/PscIcon'

type Props = { section: Section }

export default function SectionChecklist({ section }: Props) {
  const storageKey = `psc:${section.slug}:checks`
  const [checked, setChecked] = React.useState<Record<number, boolean>>({})
  const total = section.checklist.length
  const done = Object.values(checked).filter(Boolean).length
  const pct = total ? Math.round((done / total) * 100) : 0

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) setChecked(JSON.parse(saved))
    } catch {}
  }, [storageKey])

  React.useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked))
    } catch {}
  }, [checked, storageKey])

  const colorMap: Record<string, string> = {
    yellow: '#facc15', emerald: '#10b981', teal: '#14b8a6', cyan: '#06b6d4', blue: '#3b82f6',
    violet: '#8b5cf6', fuchsia: '#d946ef', red: '#ef4444', purple: '#a855f7', indigo: '#6366f1', lime: '#84cc16',
  }
  const col = colorMap[section.color] || '#00ff41'

  return (
    <div className="card-cyber rounded-lg p-5" style={{ borderLeft: `4px solid ${col}` }}>
      <div className="flex items-center gap-3 mb-2">
        <PscIcon name={section.icon} color={col} />
        <h2 className="text-xl font-semibold" style={{ color: col }}>{section.title}</h2>
      </div>
      <div className="flex items-center justify-between mb-3 text-sm text-text-muted">
        <span>Progresso da seção</span>
        <span className="font-medium" style={{ color: col }}>{done}/{total} · {pct}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded mb-4 overflow-hidden">
        <div className="h-1.5 rounded bar-animate" style={{ width: `${pct}%`, background: col }} />
      </div>
      {section.intro && <p className="text-text-muted mb-4">{section.intro}</p>}
      <ul className="space-y-3">
        {section.checklist.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <input
              id={`chk-${idx}`}
              type="checkbox"
              className="mt-1"
              checked={!!checked[idx]}
              onChange={(e) => setChecked((c) => ({ ...c, [idx]: e.target.checked }))}
            />
            <div>
              <div className="flex items-center gap-2">
                <label htmlFor={`chk-${idx}`} className="font-medium cursor-pointer">
                  {item.point}
                </label>
                <PriorityBadge value={item.priority as any} />
              </div>
              <p className="text-sm text-text-muted mt-1 whitespace-pre-wrap">{item.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
