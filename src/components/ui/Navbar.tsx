"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV_LINKS } from '@/constants/nav'
import { SITE } from '@/lib/site'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#inicio')
  const pathname = usePathname()

  useEffect(() => {
    const ids = NAV_LINKS
      .map(l => (l.href.startsWith('#') ? l.href.slice(1) : ''))
      .filter(Boolean)

    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!('IntersectionObserver' in window) || sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        // Pick the first intersecting entry to set as active
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      {
        root: null,
        // Trigger when section passes roughly the middle of the viewport
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0.1,
      }
    )

    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="bg-darker/90 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo aria-label="YesLinux home" />

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
          {NAV_LINKS.map(({ href, label }) => {
            const computedHref = href.startsWith('#') ? `/${href}` : href
            const isActive = active === href || (computedHref === '/tools' && pathname === '/tools')
            return (
              <Link
                key={href}
                href={computedHref}
                className={`py-2 md:py-0 hover:text-primary ${isActive ? 'text-primary font-semibold' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                  setOpen(false)
                  setActive(href)
                }}
              >
                {label}
              </Link>
            )
          })}
          <div className="py-2 md:py-0 md:ml-6 flex flex-col md:flex-row md:space-x-3 text-xs text-text-muted">
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">
              {SITE.email}
            </a>
            <span className="hidden md:inline">|</span>
            <span>{SITE.phone}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
