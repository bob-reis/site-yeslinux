'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import { fadeInUp } from '@/lib/motion'

const stats = [
  { value: '500+', label: 'Projetos Seguros', color: 'text-primary' },
  { value: '24/7', label: 'Monitoramento', color: 'text-secondary' },
  { value: '100%', label: 'Software Livre', color: 'text-accent' },
  { value: '5+', label: 'Anos de Experiência', color: 'text-primary' },
]

const StatsSection = () => {
  return (
    <Section id="universo" highlight="Nossos" title="Números">
      <motion.div {...fadeInUp()} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="card-cyber p-4 rounded-lg">
            <div className={`text-2xl font-bold ${s.color} font-mono`}>{s.value}</div>
            <div className="text-sm text-text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}

export default StatsSection
