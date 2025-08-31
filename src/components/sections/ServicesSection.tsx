const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-green-400">Nossos</span> Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Consultoria DevSecOps */}
          <div className="bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg p-8 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-green-400">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Consultoria DevSecOps</h3>
            <p className="text-gray-400 mb-4">
              Implementamos práticas de DevSecOps e Clean Code, garantindo que seu software seja ágil, escalável e, acima de tudo, seguro.
            </p>
            <div className="font-mono text-xs text-green-400">
              $ secure-pipeline --deploy
            </div>
          </div>
          
          {/* Investigação Cibernética */}
          <div className="bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg p-8 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-green-400">
            <div className="text-4xl mb-4">🕵️</div>
            <h3 className="text-xl font-bold text-blue-400 mb-3">Investigação Cibernética</h3>
            <p className="text-gray-400 mb-4">
              Exponha a verdade com nossa equipe especializada em OSINT e técnicas avançadas de rastreamento digital.
            </p>
            <div className="font-mono text-xs text-blue-400">
              $ osint --trace --deep-web
            </div>
          </div>
          
          {/* Defesa Cibernética */}
          <div className="bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg p-8 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-green-400">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-orange-400 mb-3">Defesa Cibernética</h3>
            <p className="text-gray-400 mb-4">
              Proteção de ponta com XDR, EDR, Firewalls e soluções de segurança integradas. Monitoramento 24/7.
            </p>
            <div className="font-mono text-xs text-orange-400">
              $ defense-matrix --active
            </div>
          </div>
          
          {/* Análise de Vulnerabilidades */}
          <div className="bg-gray-900 bg-opacity-50 border border-gray-600 rounded-lg p-8 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300 hover:border-green-400">
            <div className="text-4xl mb-4">🔎</div>
            <h3 className="text-xl font-bold text-red-400 mb-3">Pentest & Vulnerabilidades</h3>
            <p className="text-gray-400 mb-4">
              Testamos os limites do seu sistema com cenários de ataque avançados. Identifique e corrija falhas antes dos criminosos.
            </p>
            <div className="font-mono text-xs text-red-400">
              $ pentest --advanced --report
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
