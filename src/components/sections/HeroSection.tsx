const HeroSection = () => {
  return (
    <header id="inicio" className="text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
          <span className="text-green-400">YES</span><span className="text-white">LINUX</span>
        </h1>
        
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 text-sm md:text-base">
            <span className="flex items-center"><span className="text-green-400 mr-2">🛡️</span>SEGURANÇA</span>
            <span className="flex items-center"><span className="text-blue-400 mr-2">⚙️</span>LIBERDADE</span>
            <span className="flex items-center"><span className="text-orange-400 mr-2">⚡</span>INOVAÇÃO</span>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl mb-4 font-light">
          Segurança, liberdade e inovação em <span className="text-green-400">cada linha de código</span>
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Na YesLinux, unimos <span className="text-green-400">software livre</span>, 
          <span className="text-blue-400"> cibersegurança</span> e 
          <span className="text-orange-400"> tecnologia de ponta</span> para proteger seu negócio 
          e impulsionar sua transformação digital.
        </p>
        
        {/* Status Terminal */}
        <div className="bg-black bg-opacity-80 border border-green-400 border-opacity-50 rounded-lg p-6 mb-12 max-w-2xl mx-auto backdrop-blur-sm">
          <div className="text-left">
            <div className="text-green-400 font-mono text-sm mb-4">$ system_status --yeslinux</div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Servidor Online:  </span>
                <span className="text-green-400">ACTIVE</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Segurança:  </span>
                <span className="text-green-400">MÁXIMA</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Software Livre:  </span>
                <span className="text-green-400">100%</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-3">⚡</span>
                <span className="text-gray-300">Status:  </span>
                <span className="text-green-400">PRONTO PARA AÇÃO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection