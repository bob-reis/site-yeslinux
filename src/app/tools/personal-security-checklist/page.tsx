import SectionLinkGrid from '@/components/psc/SectionLinkGrid'
import { loadPscSections } from '@/lib/psc-data'

export const metadata = {
  title: 'Personal Security Checklist | YesLinux Tools',
}

export default function PSCIndexPage() {
  const sections = loadPscSections()

  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-3">Checklist de Segurança Pessoal</h1>
        <p className="text-text-muted mb-8">
          Guia prático para reforçar sua segurança e privacidade digital. Dados ficam apenas no seu navegador.
        </p>
        {sections.length === 0 ? (
          <div className="card-cyber rounded-lg p-6">
            <p className="text-text-muted">
              Não foi possível carregar os dados da checklist. Verifique se o arquivo
              <code className="mx-1 text-primary">personal-security-checklist/web/src/data/checklists.generated.ts</code>
              existe no repositório.
            </p>
          </div>
        ) : (
          <SectionLinkGrid sections={sections} />
        )}
      </section>
    </main>
  )
}

