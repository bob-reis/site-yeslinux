const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para <span className="text-green-400">fortalecer</span> sua segurança digital?
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Entre em contato conosco e descubra como podemos proteger sua infraestrutura
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30">
              Falar com Especialista
            </button>
            
            <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300">
              Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection