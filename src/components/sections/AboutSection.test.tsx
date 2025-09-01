import { renderToString } from 'react-dom/server'
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
  Target: () => <div data-testid="target-icon" />,
}))

describe('AboutSection', () => {
  it('renders the section heading', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('Sobre')
  })

  it('renders all value cards with icons and descriptions', () => {
    const html = renderToString(<AboutSection />)

    // Security
    expect(html).toContain('data-testid="shield-icon"')
    expect(html).toContain('Segurança')
    expect(html).toContain('Proteção é nossa prioridade número um em cada projeto.')

    // Transparency
    expect(html).toContain('data-testid="users-icon"')
    expect(html).toContain('Transparência')
    expect(html).toContain('Software livre significa código aberto e confiança total.')

    // Excellence
    expect(html).toContain('data-testid="award-icon"')
    expect(html).toContain('Excelência')
    expect(html).toContain('Padrões elevados em desenvolvimento e consultoria.')

    // Focus
    expect(html).toContain('data-testid="target-icon"')
    expect(html).toContain('Foco')
    expect(html).toContain('Soluções direcionadas para suas necessidades específicas.')
  })

  it('has section id', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('id="sobre"')
  })


  it('renders mission callout', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('Nossa Missão')
    expect(html).toContain('Tornar a segurança digital acessível')
  })
})
