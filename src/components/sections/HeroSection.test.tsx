import { renderToString } from 'react-dom/server'
import HeroSection from './HeroSection'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Shield: () => <div data-testid="shield-icon" />,
  Code: () => <div data-testid="code-icon" />,
  Zap: () => <div data-testid="zap-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
}))

describe('HeroSection', () => {
  it('renders the main heading and logo', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('YES')
    expect(html).toContain('LINUX')
  })

  it('renders security, freedom, and innovation icons and labels', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('data-testid="shield-icon"')
    expect(html).toContain('SEGURANÇA')
    expect(html).toContain('data-testid="code-icon"')
    expect(html).toContain('LIBERDADE')
    expect(html).toContain('data-testid="zap-icon"')
    expect(html).toContain('INOVAÇÃO')
  })

  it('renders the main headline and subtitle', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toMatch(/Segurança, liberdade e inovação em/)
    expect(html).toMatch(/cada linha de código/)
    expect(html).toMatch(/Na YesLinux, unimos/)
  })


  it('renders scroll indicator', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('data-testid="chevron-down-icon"')
  })
})
