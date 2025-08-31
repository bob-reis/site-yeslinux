import { renderToString } from 'react-dom/server'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it('renders the call to action heading', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('Pronto para')
    expect(html).toContain('fortalecer')
  })

  it('renders the CTA button', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('Falar com Especialista')
  })

  it('has proper section id', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('id="contato"')
  })

  it('has proper button styling', () => {
    const html = renderToString(<ContactSection />)
    expect(html).toContain('bg-green-400 text-black')
  })
})