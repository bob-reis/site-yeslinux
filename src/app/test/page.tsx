export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-green-400 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">YES</span>
            <span className="text-white">LINUX</span>
          </h1>
          <p className="text-xl text-gray-300">
            Segurança, liberdade e inovação em cada linha de código
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
        </header>

        {/* Status */}
        <div className="bg-black border border-green-400 rounded-lg p-6 mb-8">
          <h2 className="text-green-400 font-mono text-lg mb-4">$ system_status --check</h2>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Next.js Server: ONLINE</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Tailwind CSS: LOADED</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>TypeScript: COMPILED</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">⚠</span>
              <span>Advanced Features: LOADING...</span>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800 border border-gray-600 rounded-lg p-6 hover:border-green-400 transition-colors">
            <h3 className="text-green-400 font-semibold text-lg mb-2">🛡️ Cibersegurança</h3>
            <p className="text-gray-300 text-sm">Proteção avançada e investigação digital</p>
          </div>
          
          <div className="bg-slate-800 border border-gray-600 rounded-lg p-6 hover:border-blue-400 transition-colors">
            <h3 className="text-blue-400 font-semibold text-lg mb-2">⚙️ DevSecOps</h3>
            <p className="text-gray-300 text-sm">Desenvolvimento seguro e automatização</p>
          </div>
          
          <div className="bg-slate-800 border border-gray-600 rounded-lg p-6 hover:border-purple-400 transition-colors">
            <h3 className="text-purple-400 font-semibold text-lg mb-2">🔍 OSINT</h3>
            <p className="text-gray-300 text-sm">Investigação e inteligência cibernética</p>
          </div>
          
          <div className="bg-slate-800 border border-gray-600 rounded-lg p-6 hover:border-orange-400 transition-colors">
            <h3 className="text-orange-400 font-semibold text-lg mb-2">🏗️ Infraestrutura</h3>
            <p className="text-gray-300 text-sm">Soluções robustas em software livre</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors mr-4">
            Falar com Especialista
          </button>
          <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-colors">
            Diagnóstico Gratuito
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2024 YesLinux - Consultoria em Software Livre</p>
          <p className="mt-2 font-mono">
            <span className="text-green-400">$</span> curl -X GET https://yeslinux.com.br/freedom
          </p>
        </footer>
      </div>
    </div>
  )
}