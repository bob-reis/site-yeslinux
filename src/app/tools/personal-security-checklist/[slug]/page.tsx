import SectionChecklist from '@/components/psc/SectionChecklist'
import { loadPscSections } from '@/lib/psc-data'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  const sections = loadPscSections()
  return sections.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const sections = loadPscSections()
  const s = sections.find((x) => x.slug === params.slug)
  return { title: s ? `${s.title} | PSC` : 'Checklist | PSC' }
}

export default function PSCSectionPage({ params }: Props) {
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
        <h1 className="text-2xl font-semibold mb-2">{s.title}</h1>
        <p className="text-text-muted mb-6">{s.description}</p>
        <SectionChecklist section={s} />
      </section>
    </main>
  )
}

