import Link from 'next/link'
import SectionChecklist from '@/components/psc/SectionChecklist'
import ClearProgressButton from '@/components/psc/ClearProgressButton'
import { loadPscSections } from '@/lib/psc-data'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  const sections = loadPscSections()
  return sections.map((s) => ({ slug: s.slug }))
}

export const dynamic = 'force-static'

export function generateMetadata({ params }: Readonly<Props>): Metadata {
  const sections = loadPscSections()
  const s = sections.find((x) => x.slug === params.slug)
  return { title: s ? `${s.title} | PSC` : 'Checklist | PSC' }
}

export default function PSCSectionPage({ params }: Readonly<Props>) {
  const sections = loadPscSections()
  const s = sections.find((x) => x.slug === params.slug)

  if (!s) {
    return (
      <main className="min-h-screen py-10">
        <section className="container mx-auto px-4">
          <p className="text-text-muted">Seção não encontrada.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-3">
          <Link href="/tools/personal-security-checklist" className="btn-cyber px-3 py-1.5 rounded inline-flex items-center gap-1">
            <span>←</span>
            <span>Voltar</span>
          </Link>
          <ClearProgressButton />
        </div>
        <h1 className="text-2xl font-semibold mb-1">{s.title}</h1>
        <p className="text-text-muted mb-6">{s.description}</p>
        <SectionChecklist section={s} />
        <div className="mt-8">
          <Link href="/tools/personal-security-checklist" className="btn-cyber px-3 py-1.5 rounded inline-flex items-center gap-1">
            <span>←</span>
            <span>Voltar</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
