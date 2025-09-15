import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import SectionLinkGrid from './SectionLinkGrid'
import type { Sections } from '@/types/psc'

const SECTIONS: Sections = [
  {
    title: 'Autenticação', slug: 'authentication', description: 'd', icon: 'password', color: 'yellow',
    checklist: [{ point: 'a', priority: 'essential', details: 'd' }, { point: 'b', priority: 'optional', details: 'd' }],
  }
]

describe('<SectionLinkGrid />', () => {
  beforeEach(() => {
    localStorage.clear()
    // mark one item as done
    localStorage.setItem('psc:authentication:checks', JSON.stringify({ 0: true }))
  })

  it('shows progress and percentage per section', () => {
    render(<SectionLinkGrid sections={SECTIONS} />)
    expect(screen.getByText(/1\/2 concluídos/)).toBeInTheDocument()
    expect(screen.getByText(/50%/)).toBeInTheDocument()
  })
})

