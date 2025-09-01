'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Target } from 'lucide-react'
import Section from '@/components/ui/Section'
import { fadeInUp } from '@/lib/motion'

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção é nossa prioridade número um em cada projeto.'
    },
    {
      icon: Users,
      title: 'Transparência',
      description: 'Software livre significa código aberto e confiança total.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Padrões elevados em desenvolvimento e consultoria.'
    },
    {
      icon: Target,
      title: 'Foco',
      description: 'Soluções direcionadas para suas necessidades específicas.'
    }
  ]

  return (
    <Section id="sobre" highlight="Sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Story */}
        <motion.div {...fadeInUp()}> 
          <div className="space-y-6">
            <p className="text-lg text-text-muted leading-relaxed">
              A <span className="text-primary font-semibold">YesLinux</span> nasceu para democratizar a segurança digital com tecnologia de ponta e software livre.
            </p>
            
            <p className="text-lg text-text-muted leading-relaxed">
              Somos especialistas em <span className="text-secondary">desenvolvimento seguro (DevSecOps)</span>, 
              {' '}<span className="text-accent">investigação cibernética</span> e{' '}
              <span className="text-primary">defesa de infraestruturas críticas</span>. Atuamos lado a lado com pequenas e médias empresas, oferecendo soluções robustas, acessíveis e sustentáveis.
            </p>
            
            <p className="text-lg text-text-muted leading-relaxed">
              Nosso compromisso é com a <span className="text-secondary">transparência</span>, a <span className="text-accent">inovação</span> e a <span className="text-primary">proteção real</span> de dados, sistemas e pessoas.
            </p>

            <div className="bg-darker/50 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-primary font-semibold text-lg mb-3">Nossa Missão</h3>
              <p className="text-text-muted italic">
                &quot;Tornar a segurança digital acessível através do software livre, 
                protegendo empresas e pessoas com soluções transparentes e inovadoras.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Values */}
        <motion.div {...fadeInUp({ delay: 0.2 })}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeInUp({ delay: 0.1 * index, y: 30, duration: 0.6 })}
                className="card-cyber p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-darker rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                
                <p className="text-text-muted text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default AboutSection
