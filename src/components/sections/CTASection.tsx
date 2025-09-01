'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import { fadeInUp } from '@/lib/motion'

const CTASection = () => {
  return (
    <Section>
      <motion.div {...fadeInUp()} className="text-center">
        <a href="#contato" className="btn-cyber">
          Fale com um Especialista
        </a>
      </motion.div>
    </Section>
  )
}

export default CTASection
