"use client"
import React from 'react'

const TIPS: { title: string; text: string; link?: { href: string; label: string } }[] = [
  { title: 'Use 2FA', text: 'Ative autenticação de dois fatores nas contas críticas.' },
  { title: 'Gerenciador de Senhas', text: 'Armazene e gere senhas únicas e fortes; evite reutilização.' },
  { title: 'Atualizações em Dia', text: 'Mantenha sistema e apps atualizados contra vulnerabilidades.' },
  { title: 'Phishing', text: 'Desconfie de links e anexos suspeitos; verifique o remetente.' },
  { title: 'Backup', text: 'Tenha backups regulares e offline dos dados importantes.' },
  { title: 'Privacidade', text: 'Considere migrar para apps que respeitam sua privacidade.', link: { href: 'https://awesome-privacy.xyz', label: 'awesome-privacy.xyz' } },
]

export default function SecurityTipsCard() {
  const [idx, setIdx] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TIPS.length), 7000)
    return () => clearInterval(id)
  }, [])
  const tip = TIPS[idx]
  return (
    <div className="card-glass rounded-xl p-4">
      <div className="text-primary font-semibold mb-1">Dica de Segurança</div>
      <div className="text-text-muted">
        <span className="font-medium text-text-light">{tip.title}: </span>
        {tip.text}
        {tip.link && (
          <>
            {' '}em{' '}
            <a href={tip.link.href} className="text-primary hover:underline" target="_blank" rel="noreferrer">
              {tip.link.label}
            </a>
          </>
        )}
      </div>
    </div>
  )
}

