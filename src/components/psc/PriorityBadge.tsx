import React from 'react'
import type { Priority } from '@/types/psc'

type Props = { value: Priority }

const styles: Record<Priority, { bg: string; text: string; label: string }> = {
  essential: { bg: 'rgba(0,255,65,0.15)', text: '#00ff41', label: 'Essencial' },
  optional: { bg: 'rgba(148,163,184,0.15)', text: '#94a3b8', label: 'Opcional' },
  advanced: { bg: 'rgba(234,179,8,0.15)', text: '#eab308', label: 'Avançado' },
}

export default function PriorityBadge({ value }: Props) {
  const s = styles[value]
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-[10px]"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.text}33` }}
    >
      {s.label}
    </span>
  )
}

