'use client'

import HackerCard from '../ui/HackerCard'
import Section from '../ui/Section'
import { SERVICES } from '@/data/services'

const ServicesSection = () => (
  <Section
    id="servicos"
    highlight="Nossos"
    title="Serviços"
    description="Soluções completas em segurança digital e software livre"
  >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICES.map(({ title, items }) => (
          <HackerCard key={title} title={title} items={items} />
        ))}
      </div>
    </Section>
)

export default ServicesSection
