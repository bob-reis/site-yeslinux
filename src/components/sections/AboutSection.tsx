'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Target } from 'lucide-react'

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
    <section id="about" className="py-20 relative bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Sobre</span>{' '}
            <span className="text-white">Nós</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-text-muted leading-relaxed">
                A <span className="text-primary font-semibold">YesLinux</span> nasceu com a missão de 
                democratizar a segurança digital por meio do software livre.
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed">
                Somos especialistas em <span className="text-secondary">desenvolvimento seguro</span>, 
                {' '}<span className="text-accent">investigação cibernética</span> e{' '}
                <span className="text-primary">defesa de infraestruturas críticas</span>.
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed">
                Atuamos lado a lado com empresas e pessoas para oferecer soluções robustas, 
                acessíveis e sustentáveis, sempre com foco em transparência, inovação e proteção.
              </p>

              <div className="bg-darker/50 border border-primary/20 rounded-lg p-6 mt-8">
                <h3 className="text-primary font-semibold text-lg mb-3">Nossa Missão</h3>
                <p className="text-text-muted italic">
                  "Tornar a segurança digital acessível através do software livre, 
                  protegendo empresas e pessoas com soluções transparentes e inovadoras."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="text-primary">Nossa</span> Jornada
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {[
                { year: '2020', title: 'Fundação', description: 'YesLinux é criada com foco em software livre' },
                { year: '2021', title: 'Primeiros Projetos', description: 'Desenvolvimento de soluções de segurança' },
                { year: '2022', title: 'Expansão', description: 'Crescimento da equipe e serviços' },
                { year: '2023', title: 'Reconhecimento', description: 'Consolidação no mercado de cibersegurança' },
                { year: '2024', title: 'Inovação', description: 'Novas tecnologias e parcerias estratégicas' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <div className={`card-cyber p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-primary font-mono mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-darker z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection