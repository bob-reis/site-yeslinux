import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black/60 border-t border-primary/20 mt-20" role="contentinfo">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <a href="#inicio" className="font-mono text-2xl font-bold" aria-label="YesLinux home">
            <span className="text-primary">YES</span>
            <span className="text-white">LINUX</span>
          </a>
          <p className="text-text-muted mt-3 max-w-xs">
            Segurança, liberdade e inovação em cada linha de código.
          </p>
        </div>

        <nav aria-label="Links rápidos" className="text-sm">
          <h3 className="font-bold text-text-light mb-3">Navegação</h3>
          <ul className="space-y-2 text-text-muted">
            <li><a className="hover:text-primary" href="#inicio">Início</a></li>
            <li><a className="hover:text-primary" href="#universo">Universo InfoSec</a></li>
            <li><a className="hover:text-primary" href="#servicos">Serviços</a></li>
            <li><a className="hover:text-primary" href="#sobre">Sobre Nós</a></li>
            <li><a className="hover:text-primary" href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-bold text-text-light mb-3">Contato</h3>
          <ul className="space-y-2 text-text-muted">
            <li>
              <a className="hover:text-primary" href="mailto:contato@yeslinux.com.br">contato@yeslinux.com.br</a>
            </li>
            <li>
              <span>+55 (11) 96160-0500</span>
            </li>
            <li className="pt-2 flex gap-4">
              <a className="hover:text-primary" href="https://linkedin.com/company/yeslinux" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="hover:text-primary" href="https://github.com/bob-reis/site-yeslinux" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="hover:text-primary" href="https://yeslinux.org" target="_blank" rel="noopener noreferrer">Website</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 py-4 text-xs text-text-muted flex flex-col md:flex-row items-center justify-between">
          <p>
            © {year} YesLinux. Segurança • Liberdade • Inovação.
          </p>
          <p className="mt-2 md:mt-0">Construído com Next.js, React e Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

