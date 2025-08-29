'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, Code, Zap, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

          {/* Video Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              {!isVideoPlaying ? (
                <div className="relative bg-dark/80 border border-primary/30 rounded-lg p-8 backdrop-blur-sm">
                  <div className="aspect-video bg-darker rounded-lg flex items-center justify-center border border-primary/20">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="btn-cyber flex items-center space-x-2 group"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                      </div>
                      <span>Assistir Vídeo Institucional</span>
                    </button>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-ping" />
                </div>
              ) : (
                <div className="aspect-video bg-darker rounded-lg flex items-center justify-center border border-primary">
                  <p className="text-text-muted font-mono">
                    [Vídeo será carregado aqui - placeholder para desenvolvimento]
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button className="btn-cyber w-full sm:w-auto">
              Fale com um Especialista
            </button>
            
            <button className="btn-cyber bg-transparent border-secondary text-secondary hover:bg-secondary/10 w-full sm:w-auto">
              Diagnóstico Gratuito
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
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
              <div className="text-sm text-text-muted">Anos de Experiência</div>
            </div>
          </motion.div>
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