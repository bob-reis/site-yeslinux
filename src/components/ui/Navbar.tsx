'use client'

import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-darker/90 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-mono text-2xl font-bold" aria-label="YesLinux home">
          <span className="text-primary">YES</span>
          <span className="text-white">LINUX</span>
        </a>

        <button
          className="md:hidden text-text-light focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>

        <div
          className={`${open ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center md:space-x-6 font-mono text-sm text-text-light`}
        >
          <a href="#inicio" className="py-2 md:py-0 hover:text-primary" onClick={() => setOpen(false)}>Início</a>
          <a href="#universo" className="py-2 md:py-0 hover:text-primary" onClick={() => setOpen(false)}>Universo InfoSec</a>
          <a href="#servicos" className="py-2 md:py-0 hover:text-primary" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#sobre" className="py-2 md:py-0 hover:text-primary" onClick={() => setOpen(false)}>Sobre Nós</a>
          <a href="#contato" className="py-2 md:py-0 hover:text-primary" onClick={() => setOpen(false)}>Contato</a>
          <div className="py-2 md:py-0 md:ml-6 flex flex-col md:flex-row md:space-x-3 text-xs text-text-muted">
            <a
              href="mailto:contato@yeslinux.com.br"
              className="hover:text-primary"
            >
              contato@yeslinux.com.br
            </a>
            <span className="hidden md:inline">|</span>
            <span>+55 (11) 96160-0500</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
