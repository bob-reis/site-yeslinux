const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-green-400">Sobre</span> Nós
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <div className="text-lg text-gray-300 leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
            <p>
              A <span className="text-green-400 font-semibold">YesLinux</span> nasceu com a missão de 
              democratizar a segurança digital por meio do software livre.
            </p>
            <p>
              Somos especialistas em <span className="text-blue-400">desenvolvimento seguro</span>, 
              <span className="text-orange-400"> investigação cibernética</span> e 
              <span className="text-red-400"> defesa de infraestruturas críticas</span>.
            </p>
            <p>
              Atuamos lado a lado com empresas e pessoas para oferecer soluções robustas, 
              acessíveis e sustentáveis, sempre com foco em transparência, inovação e proteção.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection