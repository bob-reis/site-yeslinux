import { render, screen } from '@testing-library/react'
import ServicesSection from './ServicesSection'

// Mock the Section component
vi.mock('../ui/Section', () => ({
  default: ({ highlight, title, description, children }: any) => (
    <div>
      <span>{highlight}</span>
      <span>{title}</span>
      <p>{description}</p>
      {children}
    </div>
  )
}))

describe('ServicesSection', () => {
  it('renders with correct props passed to Section component', () => {
    render(<ServicesSection />)
    
    expect(screen.getByText('Nossos')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Soluções completas em segurança digital e software livre')).toBeInTheDocument()
  })

  it('renders placeholder content', () => {
    render(<ServicesSection />)
    
    expect(screen.getByText('[Seção de Serviços será desenvolvida]')).toBeInTheDocument()
  })
})