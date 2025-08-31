const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Pronto para <span className="text-green-400">fortalecer</span> sua segurança digital?
        </h2>
        <br /><br />
        <div className="flex justify-center">
          <button className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 transition-colors">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection