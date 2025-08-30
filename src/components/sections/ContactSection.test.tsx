import { renderToString } from 'react-dom/server'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('Entre em')
    expect(html).toContain('Contato')
  })

  it('renders the description', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('Pronto para fortalecer sua segurança digital?')
  })

  it('renders placeholder content', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('[Formulário de Contato será desenvolvido]')
  })

  it('includes a section element', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('<section')
  })
})
