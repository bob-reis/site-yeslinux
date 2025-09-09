"use client"

import { useMemo, useRef, useState } from 'react'
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
  const fileRef = useRef<HTMLInputElement | null>(null)

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

  const keysForSection = (s: Section) => s.checklist.map(i => keyFor(s.slug, i))

  const markSection = (s: Section, done: boolean) => {
    setProgress(prev => {
      const next = { ...prev }
      const keys = keysForSection(s)
      if (done) keys.forEach(k => (next[k] = true))
      else keys.forEach(k => delete next[k])
      return next
    })
  }

  const markAllFiltered = (done: boolean) => {
    setProgress(prev => {
      const next = { ...prev }
      filtered.forEach(s => {
        s.checklist.forEach(i => {
          const k = keyFor(s.slug, i)
          if (done) next[k] = true
          else delete next[k]
        })
      })
      return next
    })
  }

  const doExport = (obj: unknown, filename: string) => {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const exportProgress = () => {
    const payload = {
      version: 1,
      locale: 'pt-BR',
      timestamp: new Date().toISOString(),
      progress,
    }
    doExport(payload, 'psc-progress-pt-BR.json')
  }

  const exportFiltered = () => {
    const subset: ProgressMap = {}
    filtered.forEach(s => {
      s.checklist.forEach(i => {
        const k = keyFor(s.slug, i)
        if (progress[k]) subset[k] = true
      })
    })
    const payload = {
      version: 1,
      locale: 'pt-BR',
      timestamp: new Date().toISOString(),
      progress: subset,
      scope: 'filtered'
    }
    doExport(payload, 'psc-progress-pt-BR.filtered.json')
  }

  const importProgress = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const obj = JSON.parse(String(reader.result)) as { progress?: ProgressMap }
        if (obj && obj.progress && typeof obj.progress === 'object') {
          const ok = window.confirm('Importar e sobrescrever seu progresso atual?')
          if (ok) setProgress(obj.progress)
        }
      } catch {
        // ignore parse errors
      }
    }
    reader.readAsText(file)
  }

  const counts = useMemo(() => {
    const total: Record<ChecklistItem['priority'], number> = { essential: 0, optional: 0, advanced: 0 }
    const done: Record<ChecklistItem['priority'], number> = { essential: 0, optional: 0, advanced: 0 }
    filtered.forEach(s => {
      s.checklist.forEach(i => {
        total[i.priority] += 1
        if (progress[keyFor(s.slug, i)]) done[i.priority] += 1
      })
    })
    return { total, done }
  }, [filtered, progress])

  const clearAll = () => {
    const ok = window.confirm('Tem certeza que deseja zerar todo o progresso? Esta ação não pode ser desfeita.')
    if (ok) setProgress({})
  }

  return (
    <div className="space-y-6">
      <div className="card-cyber rounded-lg p-4 flex flex-col md:flex-row md:items-end gap-3">
        <div className="flex-1">
          <label className="text-xs text-text-muted" htmlFor="psc-search">Busca</label>
          <input
            id="psc-search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Buscar por ponto ou detalhe..."
            className="w-full bg-dark/60 border border-white/10 rounded px-3 py-2 outline-none focus:border-primary/50"
            aria-label="Buscar itens no checklist"
          />
        </div>
        <div>
          <label className="text-xs text-text-muted" htmlFor="psc-priority">Prioridade</label>
          <select id="psc-priority" value={priority} onChange={e => setPriority(e.target.value as any)} className="bg-dark/60 border border-white/10 rounded px-3 py-2" aria-label="Filtrar por prioridade">
            <option value="all">Todas</option>
            <option value="essential">Essencial</option>
            <option value="optional">Opcional</option>
            <option value="advanced">Avançado</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-text-muted" htmlFor="psc-section">Seção</label>
          <select id="psc-section" value={section} onChange={e => setSection(e.target.value)} className="bg-dark/60 border border-white/10 rounded px-3 py-2" aria-label="Filtrar por seção">
            <option value="all">Todas</option>
            {sections.map(s => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div className="md:ml-auto flex items-end gap-2 flex-wrap">
          <div className="flex gap-2 text-[10px] text-text-muted">
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-green-500/30 text-green-300 bg-green-500/10">Essencial {counts.done.essential}/{counts.total.essential}</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 bg-primary/10">Opcional {counts.done.optional}/{counts.total.optional}</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-amber-500/30 text-amber-300 bg-amber-500/10">Avançado {counts.done.advanced}/{counts.total.advanced}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => markAllFiltered(true)} className="btn-cyber px-3 py-2 rounded text-sm" title="Marcar todos os itens visíveis" aria-label="Marcar todos os itens visíveis">
              Marcar tudo (filtro)
            </button>
            <button onClick={() => markAllFiltered(false)} className="btn-cyber px-3 py-2 rounded text-sm" title="Limpar marcação dos itens visíveis" aria-label="Limpar marcação dos itens visíveis">
              Limpar tudo (filtro)
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={exportProgress} className="btn-cyber px-3 py-2 rounded text-sm" title="Exportar todo o progresso" aria-label="Exportar todo o progresso">Exportar</button>
            <button onClick={exportFiltered} className="btn-cyber px-3 py-2 rounded text-sm" title="Exportar apenas itens filtrados" aria-label="Exportar apenas itens filtrados">Exportar filtrados</button>
            <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={e => {
              const f = e.target.files?.[0]
              if (f) importProgress(f)
              e.currentTarget.value = ''
            }} />
            <button onClick={() => {
              const ok = window.confirm('Importar progresso de um arquivo e sobrescrever o atual?')
              if (ok) fileRef.current?.click()
            }} className="btn-cyber px-3 py-2 rounded text-sm" title="Importar progresso de arquivo" aria-label="Importar progresso de arquivo">Importar</button>
            <button onClick={clearAll} className="btn-cyber px-3 py-2 rounded text-sm" title="Zerar todo o progresso salvo" aria-label="Zerar todo o progresso salvo">Zerar</button>
          </div>
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
              <div className="w-56 hidden md:flex flex-col items-end gap-2">
                <ProgressBar done={done} total={total} />
                <div className="flex gap-2">
                  <button onClick={() => markSection(section, true)} className="btn-cyber px-2 py-1 rounded text-xs" title={`Marcar todos os itens da seção ${section.title}`} aria-label={`Marcar todos os itens da seção ${section.title}`}>Marcar seção</button>
                  <button onClick={() => markSection(section, false)} className="btn-cyber px-2 py-1 rounded text-xs" title={`Limpar todos os itens da seção ${section.title}`} aria-label={`Limpar todos os itens da seção ${section.title}`}>Limpar seção</button>
                </div>
              </div>
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
            <div className="md:hidden mt-3">
              <ProgressBar done={done} total={total} />
              <div className="flex gap-2 mt-2">
                <button onClick={() => markSection(section, true)} className="btn-cyber px-2 py-1 rounded text-xs" title={`Marcar todos os itens da seção ${section.title}`} aria-label={`Marcar todos os itens da seção ${section.title}`}>Marcar seção</button>
                <button onClick={() => markSection(section, false)} className="btn-cyber px-2 py-1 rounded text-xs" title={`Limpar todos os itens da seção ${section.title}`} aria-label={`Limpar todos os itens da seção ${section.title}`}>Limpar seção</button>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
