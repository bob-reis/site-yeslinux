'use client'

import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-16 relative bg-darker/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-cyber">
            Fale com um Especialista
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection