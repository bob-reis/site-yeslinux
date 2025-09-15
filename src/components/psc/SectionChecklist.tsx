"use client"
import React from 'react'
import type { Section } from '@/types/psc'

type Props = { section: Section }

export default function SectionChecklist({ section }: Props) {
  const storageKey = `psc:${section.slug}:checks`
  const [checked, setChecked] = React.useState<Record<number, boolean>>({})

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

  return (
    <div className="card-cyber rounded-lg p-5">
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
              <label htmlFor={`chk-${idx}`} className="font-medium cursor-pointer">
                {item.point}
              </label>
              <div className="text-xs uppercase tracking-wide text-primary/80">{item.priority}</div>
              <p className="text-sm text-text-muted mt-1 whitespace-pre-wrap">{item.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

