'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Zap, ChevronDown } from 'lucide-react'

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Placeholder - será substituído por componente Three.js */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-darker">
        <div className="absolute inset-0 opacity-20">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Animated Nodes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-ping" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-accent rounded-full animate-bounce" />
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              <span className="text-primary font-mono">YES</span>
              <span className="text-white">LINUX</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-text-muted font-mono">
              <Shield className="w-5 h-5 text-primary" />
              <span>SEGURANÇA</span>
              <Code className="w-5 h-5 text-secondary" />
              <span>LIBERDADE</span>
              <Zap className="w-5 h-5 text-accent" />
              <span>INOVAÇÃO</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold mb-6 text-text-light leading-tight"
          >
            Segurança, liberdade e inovação em{' '}
            <span className="text-primary typing-animation">cada linha de código</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Na YesLinux, unimos <span className="text-primary">software livre</span>, 
            {' '}<span className="text-secondary">cibersegurança</span> e{' '}
            <span className="text-accent">tecnologia de ponta</span> para proteger seu negócio 
            e impulsionar sua transformação digital.
          </motion.p>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
