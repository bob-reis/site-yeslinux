import Link from 'next/link'
import type { ChecklistData } from '@/types/psc'
import pscData from '@/data/psc/pt-BR.json'
import Interactive from './Interactive'

export const metadata = {
  title: 'Checklist de Segurança Pessoal | YesLinux',
  description:
    'Guia prático em português para fortalecer sua segurança digital: autenticação, privacidade, dispositivos e muito mais.',
}

// Renderização interativa (progresso local, busca e filtros) separada em componente client

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

          <Interactive data={data} />

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
