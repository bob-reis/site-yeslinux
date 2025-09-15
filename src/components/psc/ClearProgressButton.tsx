"use client"
import React from 'react'

type Props = Readonly<{ className?: string }>

export default function ClearProgressButton({ className = '' }: Props) {
  const onClear = () => {
    if (typeof window === 'undefined') return
    const ok = confirm('Tem certeza que deseja apagar todo o progresso da Checklist?')
    if (!ok) return
    const keys = Object.keys(localStorage)
    keys.forEach((k) => {
      if (k.startsWith('psc:')) localStorage.removeItem(k)
    })
    // Força atualização para componentes de progresso
    window.location.reload()
  }

  return (
    <button onClick={onClear} className={`btn-cyber px-3 py-1.5 rounded ${className}`}>
      Limpar progresso
    </button>
  )
}
