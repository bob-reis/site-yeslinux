const HeroSection = () => {
  return (
    <header id="inicio" className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
            <span className="text-green-400">YES</span><span className="text-white">LINUX</span>
          </h1>
          
          <div className="flex justify-center items-center space-x-6 text-sm md:text-base mb-6">
            <div className="flex items-center bg-gray-800/50 px-3 py-2 rounded border border-green-400/30">
              <span className="text-green-400 mr-2">🛡️</span>SEGURANÇA
            </div>
            <div className="flex items-center bg-gray-800/50 px-3 py-2 rounded border border-blue-400/30">
              <span className="text-blue-400 mr-2">⚙️</span>LIBERDADE
            </div>
            <div className="flex items-center bg-gray-800/50 px-3 py-2 rounded border border-orange-400/30">
              <span className="text-orange-400 mr-2">⚡</span>INOVAÇÃO
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Segurança, liberdade e inovação em <span className="text-green-400 font-semibold">cada linha de código</span>
          </p>
          
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Na YesLinux, unimos <span className="text-green-400">software livre</span>, 
            <span className="text-blue-400"> cibersegurança</span> e 
            <span className="text-orange-400"> tecnologia de ponta</span> para proteger seu negócio 
            e impulsionar sua transformação digital.
          </p>
        </div>

        {/* Status Terminal Card */}
        <div className="bg-black/60 backdrop-blur-sm border border-green-400/50 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400 font-mono text-sm ml-4">root@yeslinux:~#</div>
          </div>
          
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