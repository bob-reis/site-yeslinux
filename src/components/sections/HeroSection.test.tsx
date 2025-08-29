import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from './HeroSection'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  }
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Shield: () => <div data-testid="shield-icon" />,
  Code: () => <div data-testid="code-icon" />,
  Zap: () => <div data-testid="zap-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />
}))

describe('HeroSection', () => {
  it('renders the main heading and logo', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('YES')).toBeInTheDocument()
    expect(screen.getByText('LINUX')).toBeInTheDocument()
  })

  it('renders security, freedom, and innovation icons and labels', () => {
    render(<HeroSection />)
    
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument()
    expect(screen.getByText('SEGURANÇA')).toBeInTheDocument()
    
    expect(screen.getByTestId('code-icon')).toBeInTheDocument()
    expect(screen.getByText('LIBERDADE')).toBeInTheDocument()
    
    expect(screen.getByTestId('zap-icon')).toBeInTheDocument()
    expect(screen.getByText('INOVAÇÃO')).toBeInTheDocument()
  })

  it('renders the main headline and subtitle', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/Segurança, liberdade e inovação em/)).toBeInTheDocument()
    expect(screen.getByText(/cada linha de código/)).toBeInTheDocument()
    expect(screen.getByText(/Na YesLinux, unimos/)).toBeInTheDocument()
  })

  it('renders statistics cards', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Projetos Seguros')).toBeInTheDocument()
    
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Monitoramento')).toBeInTheDocument()
    
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Software Livre')).toBeInTheDocument()
    
    expect(screen.getByText('5+')).toBeInTheDocument()
    expect(screen.getByText('Anos de Experiência')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('Fale com um Especialista')).toBeInTheDocument()
    expect(screen.getByText('Diagnóstico Gratuito')).toBeInTheDocument()
  })

  it('toggles video player when play button is clicked', () => {
    render(<HeroSection />)
    
    const playButton = screen.getByText('Assistir Vídeo Institucional')
    expect(playButton).toBeInTheDocument()
    
    fireEvent.click(playButton)
    
    expect(screen.getByText('[Vídeo será carregado aqui - placeholder para desenvolvimento]')).toBeInTheDocument()
    expect(screen.queryByText('Assistir Vídeo Institucional')).not.toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    render(<HeroSection />)
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument()
  })

  it('has proper section structure with background elements', () => {
    const { container } = render(<HeroSection />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center', 'justify-center', 'overflow-hidden')
    
    const gridPattern = container.querySelector('[style*="backgroundImage"]')
    expect(gridPattern).toBeInTheDocument()
    
    const animatedNodes = container.querySelectorAll('.animate-ping, .animate-pulse, .animate-bounce')
    expect(animatedNodes.length).toBeGreaterThan(0)
  })
})