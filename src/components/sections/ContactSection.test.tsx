import { render, screen } from '@testing-library/react'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Entre em')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Pronto para fortalecer sua segurança digital?')).toBeInTheDocument()
  })

  it('renders placeholder content', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('[Formulário de Contato será desenvolvido]')).toBeInTheDocument()
  })

  it('has proper section structure', () => {
    const { container } = render(<ContactSection />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20', 'bg-darker')
  })
})