const TerminalSection = () => {
  return (
    <section id="universo" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-400">Universo</span> InfoSec
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore o ecossistema completo da segurança da informação: legislações, normas, teams, 
          cargos, tarefas e tecnologias em uma rede interativa 3D
        </p>
        
        <div className="relative">
          <div className="w-full rounded-lg border border-green-400 border-opacity-50" style={{height: '700px', background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(13,17,23,0.6) 50%, rgba(0,0,0,0.6) 100%)'}}>
            <div className="flex items-center justify-center h-full text-gray-400 font-mono">
              [Visualização 3D do Universo InfoSec será implementada]
            </div>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 border border-gray-600 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-xs text-gray-400 mb-2">Controles:</div>
            <div className="text-xs text-gray-300 space-y-1">
              <div>🖱️ Mover mouse: Rotacionar</div>
              <div>📱 Touch: Interagir</div>
              <div>👆 Clique: Selecionar nó</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TerminalSection
