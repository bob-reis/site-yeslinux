'use client'

import HackerCard from '../ui/HackerCard'
import Section from '../ui/Section'

const services = [
  {
    title: 'Pentest',
    description: 'Testes de intrusão para identificar vulnerabilidades.'
  },
  {
    title: 'Consultoria',
    description: 'Suporte especializado em software livre e segurança.'
  },
  {
    title: 'Treinamentos',
    description: 'Capacitação da equipe para defesa cibernética.'
  }
]

const ServicesSection = () => (
  <Section
    highlight="Nossos"
    title="Serviços"
    description="Soluções completas em segurança digital e software livre"
  >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ title, description }) => (
          <HackerCard key={title} title={title} description={description} />
        ))}
      </div>
    </Section>
)

export default ServicesSection
