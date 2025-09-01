'use client'

import { motion } from 'framer-motion'

const StatsSection = () => {
  return (
    <section className="py-16 relative bg-darker/30">
      <div className="container mx-auto px-4">
        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="card-cyber p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary font-mono">500+</div>
            <div className="text-sm text-text-muted">Projetos Seguros</div>
          </div>
          
          <div className="card-cyber p-4 rounded-lg">
            <div className="text-2xl font-bold text-secondary font-mono">24/7</div>
            <div className="text-sm text-text-muted">Monitoramento</div>
          </div>
          
          <div className="card-cyber p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent font-mono">100%</div>
            <div className="text-sm text-text-muted">Software Livre</div>
          </div>
          
          <div className="card-cyber p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary font-mono">5+</div>
            <div className="text-sm text-text-muted">Anos de Experi�ncia</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-cyber">
            Fale com um Especialista
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection