"use client"

import { useMemo, useState } from 'react'
import type { ChecklistData, ChecklistItem, Section } from '@/types/psc'
import { useLocalStorage } from '@/hooks/useLocalStorage'

type ProgressMap = Record<string, true>

const keyFor = (sectionSlug: string, item: ChecklistItem) => `${sectionSlug}:${item.point}`

function PriorityPill({ p }: { p: ChecklistItem['priority'] }) {
  const label = p === 'essential' ? 'Essencial' : p === 'advanced' ? 'Avançado' : 'Opcional'
  const color = p === 'essential' ? 'bg-green-500/15 text-green-300 border-green-500/30' : p === 'advanced' ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' : 'bg-primary/10 text-primary/90 border-primary/30'
  return <span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] ${color}`}>{label}</span>
}

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  return (
    <div className="w-full">
      <div className="h-2 bg-white/10 rounded">
        <div className="h-2 bg-primary rounded" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-text-muted mt-1">{done}/{total} ({pct}%)</p>
    </div>
  )
}

export default function Interactive({ data }: { data: ChecklistData }) {
  const [progress, setProgress] = useLocalStorage<ProgressMap>('psc:progress:pt-BR', {})
  const [q, setQ] = useState('')
  const [priority, setPriority] = useState<'all' | ChecklistItem['priority']>('all')
  const [section, setSection] = useState<'all' | string>('all')

  const sections = data

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return sections
      .filter(s => section === 'all' || s.slug === section)
      .map(s => ({
        ...s,
        checklist: s.checklist.filter(item => {
          const matchQuery = !query || item.point.toLowerCase().includes(query) || item.details.toLowerCase().includes(query)
          const matchPriority = priority === 'all' || item.priority === priority
          return matchQuery && matchPriority
        })
      }))
  }, [sections, q, priority, section])

  const totals = useMemo(() => {
    let total = 0
    let done = 0
    sections.forEach(s => {
      s.checklist.forEach(item => {
        total += 1
        if (progress[keyFor(s.slug, item)]) done += 1
      })
    })
    return { total, done }
  }, [sections, progress])

  const toggle = (s: Section, item: ChecklistItem) => {
    const k = keyFor(s.slug, item)
    setProgress(prev => {
      const next = { ...prev }
      if (next[k]) delete next[k]
      else next[k] = true
      return next
    })
  }

  const clearAll = () => setProgress({})

  return (
    <div className="space-y-6">
      <div className="card-cyber rounded-lg p-4 flex flex-col md:flex-row md:items-end gap-3">
        <div className="flex-1">
          <label className="text-xs text-text-muted">Busca</label>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar por ponto ou detalhe..."
            className="w-full bg-dark/60 border border-white/10 rounded px-3 py-2 outline-none focus:border-primary/50"
          />
        </div>
        <div>
          <label className="text-xs text-text-muted">Prioridade</label>
          <select value={priority} onChange={e => setPriority(e.target.value as any)} className="bg-dark/60 border border-white/10 rounded px-3 py-2">
            <option value="all">Todas</option>
            <option value="essential">Essencial</option>
            <option value="optional">Opcional</option>
            <option value="advanced">Avançado</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-text-muted">Seção</label>
          <select value={section} onChange={e => setSection(e.target.value)} className="bg-dark/60 border border-white/10 rounded px-3 py-2">
            <option value="all">Todas</option>
            {sections.map(s => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div className="md:ml-auto">
          <button onClick={clearAll} className="btn-cyber px-3 py-2 rounded text-sm">Limpar progresso</button>
        </div>
      </div>

      <div className="card-cyber rounded-lg p-4">
        <h3 className="text-sm text-text-muted mb-2">Progresso geral</h3>
        <ProgressBar done={totals.done} total={totals.total} />
      </div>

      {filtered.map(section => {
        const total = section.checklist.length
        const done = section.checklist.filter(i => progress[keyFor(section.slug, i)]).length
        return (
          <section key={section.slug} className="card-cyber rounded-lg p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                <p className="text-text-muted text-sm">{section.description}</p>
              </div>
              <div className="w-56 hidden md:block"><ProgressBar done={done} total={total} /></div>
            </div>
            {section.intro && (
              <p className="mt-3 text-text-muted/90 text-sm leading-relaxed">{section.intro}</p>
            )}
            <ul className="mt-4 space-y-4">
              {section.checklist.map((item, idx) => {
                const k = keyFor(section.slug, item)
                const checked = Boolean(progress[k])
                return (
                  <li key={`${section.slug}-${idx}`} className={`rounded border p-4 ${checked ? 'border-primary/40 bg-primary/5' : 'border-white/10 bg-dark/40'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(section, item)}
                          className="mt-1 accent-primary"
                        />
                        <span className="font-medium leading-6">{item.point}</span>
                      </label>
                      <PriorityPill p={item.priority} />
                    </div>
                    {item.details && (
                      <p className="mt-1 text-sm text-text-muted leading-relaxed">{item.details}</p>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="md:hidden mt-3"><ProgressBar done={done} total={total} /></div>
          </section>
        )
      })}
    </div>
  )
}

