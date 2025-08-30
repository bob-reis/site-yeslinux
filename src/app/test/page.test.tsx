import { renderToString } from 'react-dom/server'
import HomePage from './page'

describe('HomePage (Test Page)', () => {
  it('renders YesLinux branding correctly', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('YES')
    expect(html).toContain('LINUX')
  })

  it('displays company tagline', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('Segurança, liberdade e inovação em cada linha de código')
  })

  it('shows system status section', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('system_status --check')
    expect(html).toContain('Next.js Server: ONLINE')
    expect(html).toContain('Tailwind CSS: LOADED')
    expect(html).toContain('TypeScript: COMPILED')
  })

  it('renders all four service cards', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('🛡️ Cibersegurança')
    expect(html).toContain('⚙️ DevSecOps')
    expect(html).toContain('🔍 OSINT')
    expect(html).toContain('🏗️ Infraestrutura')
  })

  it('includes call-to-action buttons', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('Falar com Especialista')
    expect(html).toContain('Diagnóstico Gratuito')
  })

  it('has proper color scheme classes', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('from-slate-900 via-black to-slate-900')
    expect(html).toContain('text-green-400')
  })

  it('includes footer with copyright', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('© 2024 YesLinux')
    expect(html).toContain('curl -X GET https://yeslinux.com.br/freedom')
  })

  it('uses semantic HTML structure', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('<header')
    expect(html).toContain('<footer')
  })
})