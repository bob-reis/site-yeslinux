import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  }
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Shield: () => <div data-testid="shield-icon" />,
  Users: () => <div data-testid="users-icon" />,
  Award: () => <div data-testid="award-icon" />,
  Target: () => <div data-testid="target-icon" />
}))

describe('AboutSection', () => {
  it('renders the section heading', () => {
    render(<AboutSection />)
    
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Nós')).toBeInTheDocument()
  })

  it('renders all value cards with icons and descriptions', () => {
    render(<AboutSection />)
    
    // Security
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument()
    expect(screen.getByText('Segurança')).toBeInTheDocument()
    expect(screen.getByText('Proteção é nossa prioridade número um em cada projeto.')).toBeInTheDocument()
    
    // Transparency
    expect(screen.getByTestId('users-icon')).toBeInTheDocument()
    expect(screen.getByText('Transparência')).toBeInTheDocument()
    expect(screen.getByText('Software livre significa código aberto e confiança total.')).toBeInTheDocument()
    
    // Excellence
    expect(screen.getByTestId('award-icon')).toBeInTheDocument()
    expect(screen.getByText('Excelência')).toBeInTheDocument()
    expect(screen.getByText('Padrões elevados em desenvolvimento e consultoria.')).toBeInTheDocument()
    
    // Focus
    expect(screen.getByTestId('target-icon')).toBeInTheDocument()
    expect(screen.getByText('Foco')).toBeInTheDocument()
    expect(screen.getByText('Soluções direcionadas para suas necessidades específicas.')).toBeInTheDocument()
  })

  it('has proper section structure and id', () => {
    const { container } = render(<AboutSection />)
    
    const section = container.querySelector('section#about')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-20', 'relative', 'bg-dark/50')
  })
})