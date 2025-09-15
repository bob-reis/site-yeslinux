import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SectionChecklist from './SectionChecklist'
import type { Section } from '@/types/psc'

const SEC: Section = {
  title: 'Autenticação',
  slug: 'authentication',
  description: 'desc',
  icon: 'password',
  color: 'yellow',
  checklist: [
    { point: 'Use uma Senha Forte', priority: 'essential', details: 'd1' },
    { point: 'Não Reutilize Senhas', priority: 'essential', details: 'd2' },
  ],
}

describe('<SectionChecklist />', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders items and toggles check + ignore', () => {
    render(<SectionChecklist section={SEC} />)
    // Two items rendered
    expect(screen.getByText('Use uma Senha Forte')).toBeInTheDocument()
    expect(screen.getByText('Não Reutilize Senhas')).toBeInTheDocument()

    const checks = screen.getAllByRole('checkbox')
    // first checkbox toggles checked state
    fireEvent.click(checks[0])
    const saved = JSON.parse(localStorage.getItem('psc:authentication:checks') || '{}')
    expect(Object.values(saved).some(Boolean)).toBe(true)

    // toggle ignore switch
    fireEvent.click(checks[1])
    const ignored = JSON.parse(localStorage.getItem('psc:authentication:ignore') || '{}')
    expect(Object.values(ignored).some(Boolean)).toBe(true)
  })
})

