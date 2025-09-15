"use client"
import React from 'react'
import type { Section } from '@/types/psc'
import PriorityBadge from '@/components/psc/PriorityBadge'
import PscIcon from '@/components/psc/PscIcon'

type Props = { section: Section }

export default function SectionChecklist({ section }: Props) {
  const storageKey = `psc:${section.slug}:checks`
  const [checked, setChecked] = React.useState<Record<number, boolean>>({})
  const ignoreKey = `psc:${section.slug}:ignore`
  const [ignored, setIgnored] = React.useState<Record<number, boolean>>({})
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

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(ignoreKey)
      if (saved) setIgnored(JSON.parse(saved))
    } catch {}
  }, [ignoreKey])

  React.useEffect(() => {
    try {
      localStorage.setItem(ignoreKey, JSON.stringify(ignored))
    } catch {}
  }, [ignored, ignoreKey])

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
        {section.checklist.map((item, idx) => {
          const isIgnored = !!ignored[idx]
          return (
            <li key={idx} className={`p-3 rounded-lg hover:bg-white/5 ${isIgnored ? 'opacity-60' : ''}`}>
              <div className="grid md:grid-cols-2 gap-4 items-start">
                {/* Left: title + controls */}
                <div className="flex items-start gap-3">
                  <input
                    id={`chk-${idx}`}
                    type="checkbox"
                    className="mt-1"
                    checked={!!checked[idx]}
                    onChange={(e) => setChecked((c) => ({ ...c, [idx]: e.target.checked }))}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <label htmlFor={`chk-${idx}`} className="cursor-pointer text-base font-semibold leading-snug">
                        {item.point}
                      </label>
                      <PriorityBadge value={item.priority as any} />
                    </div>
                    <label className="mt-2 inline-flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isIgnored}
                        onChange={(e) => setIgnored((ig) => ({ ...ig, [idx]: e.target.checked }))}
                        aria-label="Ignorar item"
                      />
                      <div className="w-9 h-5 bg-white/10 rounded-full relative transition-colors peer-checked:bg-primary/25">
                        <span className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white/60 transition-transform peer-checked:translate-x-4" />
                      </div>
                      <span className="text-xs text-text-muted">Ignorar</span>
                    </label>
                  </div>
                </div>
                {/* Right: details */}
                <div>
                  <p className="text-sm leading-relaxed text-text-muted whitespace-pre-wrap">{item.details}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
