import { renderToString } from 'react-dom/server'
import ServicesSection from './ServicesSection'

describe('ServicesSection', () => {
  it('renders services section with heading', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('Nossos')
    expect(html).toContain('Serviços')
  })

  it('renders all four service cards', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('Consultoria DevSecOps')
    expect(html).toContain('Investigação Cibernética')
    expect(html).toContain('Defesa Cibernética')
    expect(html).toContain('Pentest &amp; Vulnerabilidades')
  })

  it('has proper section id', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('id="servicos"')
  })

  it('includes service descriptions and commands', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('$ secure-pipeline --deploy')
    expect(html).toContain('$ osint --trace --deep-web')
    expect(html).toContain('$ defense-matrix --active')
    expect(html).toContain('$ pentest --advanced --report')
  })
})