import { render, screen } from '@testing-library/react'
import GamificationSection from './GamificationSection'

describe('GamificationSection', () => {
  it('renders the section heading', () => {
    render(<GamificationSection />)
    
    expect(screen.getByText('Security')).toBeInTheDocument()
    expect(screen.getByText('Challenge')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<GamificationSection />)
    
    expect(screen.getByText('Teste seus conhecimentos em segurança digital')).toBeInTheDocument()
  })

  it('renders placeholder content', () => {
    render(<GamificationSection />)
    
    expect(screen.getByText('[Seção de Gamificação será desenvolvida]')).toBeInTheDocument()
  })

  it('has proper section structure', () => {
    const { container } = render(<GamificationSection />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20', 'bg-dark')
  })
})