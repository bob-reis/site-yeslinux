import Link from 'next/link'
import type { ChecklistData, ChecklistItem, Section } from '@/types/psc'
import pscData from '@/data/psc/pt-BR.json'

export const metadata = {
  title: 'Checklist de Segurança Pessoal | YesLinux',
  description:
    'Guia prático em português para fortalecer sua segurança digital: autenticação, privacidade, dispositivos e muito mais.',
}

function PriorityPill({ p }: { p: ChecklistItem['priority'] }) {
  const label = p === 'essential' ? 'Essencial' : p === 'advanced' ? 'Avançado' : 'Opcional'
  const color = p === 'essential' ? 'bg-green-500/15 text-green-300 border-green-500/30' : p === 'advanced' ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' : 'bg-primary/10 text-primary/90 border-primary/30'
  return <span className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] ${color}`}>{label}</span>
}

export default function PersonalSecurityChecklistPage() {
  const data = pscData as unknown as ChecklistData
  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="card-cyber rounded-lg p-6 mb-6 text-center">
            <p className="text-sm text-text-muted">O definitivo</p>
            <h1 className="text-3xl md:text-4xl font-bold">Checklist de Segurança Pessoal</h1>
            <p className="text-text-muted mt-2">
              Seu guia para proteger sua vida digital e privacidade.
            </p>
          </div>

          <div className="rounded-lg p-0 md:p-4 space-y-8">
            {data.map((section: Section) => (
              <section key={section.slug} className="card-cyber rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                    <p className="text-text-muted text-sm">{section.description}</p>
                  </div>
                </div>
                {section.intro && (
                  <p className="mt-3 text-text-muted/90 text-sm leading-relaxed">{section.intro}</p>
                )}
                <ul className="mt-4 space-y-4">
                  {section.checklist.map((item: ChecklistItem, idx: number) => (
                    <li key={`${section.slug}-${idx}`} className="rounded border border-white/10 bg-dark/40 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium leading-6">{item.point}</h3>
                        <PriorityPill p={item.priority} />
                      </div>
                      {item.details && (
                        <p className="mt-1 text-sm text-text-muted leading-relaxed">{item.details}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <hr className="my-8 border-white/10" />

          <footer className="text-xs text-text-muted text-center">
            <p>
              Licenciado sob MIT — Fork do projeto original de{' '}
              <a className="text-primary hover:underline" href="https://aliciasykes.com" target="_blank" rel="noreferrer">Alicia Sykes</a>
              , mantendo os devidos créditos. Código-fonte original em{' '}
              <a className="text-primary hover:underline" href="https://github.com/Lissy93/personal-security-checklist" target="_blank" rel="noreferrer">github.com/Lissy93/personal-security-checklist</a>.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}
