import React from 'react'
import Logo from './Logo'
import { NAV_LINKS } from '@/constants/nav'
import { SITE } from '@/lib/site'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer id="contato" className="bg-black/60 border-t border-primary/20 mt-20" role="contentinfo">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo aria-label="YesLinux home" />
          <p className="text-text-muted mt-3 max-w-xs">
            Segurança, liberdade e inovação em cada linha de código.
          </p>
        </div>

        <nav aria-label="Links rápidos" className="text-sm">
          <h3 className="font-bold text-text-light mb-3">Navegação</h3>
          <ul className="space-y-2 text-text-muted">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><a className="hover:text-primary" href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-bold text-text-light mb-3">Contato</h3>
          <ul className="space-y-2 text-text-muted">
            <li>
              <a className="hover:text-primary" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <span>{SITE.phone}</span>
            </li>
            <li className="pt-2 flex gap-4">
              <a className="hover:text-primary" href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="hover:text-primary" href={SITE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="hover:text-primary" href={SITE.socials.website} target="_blank" rel="noopener noreferrer">Website</a>
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
