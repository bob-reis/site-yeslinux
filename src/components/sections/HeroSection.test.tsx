import { renderToString } from 'react-dom/server'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the main heading and logo', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('YES')
    expect(html).toContain('LINUX')
  })

  it('renders security, freedom, and innovation labels', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('SEGURANÇA')
    expect(html).toContain('LIBERDADE')
    expect(html).toContain('INOVAÇÃO')
  })

  it('renders the main headline and subtitle', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toMatch(/Segurança, liberdade e inovação em/)
    expect(html).toMatch(/cada linha de código/)
    expect(html).toMatch(/Na YesLinux, unimos/)
  })

  it('renders system status terminal', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('system_status --yeslinux')
    expect(html).toContain('Servidor Online')
    expect(html).toContain('ACTIVE')
    expect(html).toContain('MÁXIMA')
    expect(html).toContain('PRONTO PARA AÇÃO')
  })

  it('has proper semantic structure', () => {
    const html = renderToString(<HeroSection />)
    expect(html).toContain('id="inicio"')
    expect(html).toContain('<header')
  })
})
