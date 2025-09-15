import React from 'react'
import type { Sections } from '@/types/psc'

type Props = { sections: Sections }

export default function SectionLinkGrid({ sections }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((s) => (
        <a key={s.slug} href={`/tools/personal-security-checklist/${s.slug}`} className="card-cyber rounded-lg p-5 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-primary mb-1">{s.title}</h3>
          <p className="text-text-muted text-sm mb-2">{s.description}</p>
          <p className="text-xs text-text-muted opacity-80">{s.checklist.length} itens</p>
        </a>
      ))}
    </div>
  )
}

