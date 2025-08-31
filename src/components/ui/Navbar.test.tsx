import { renderToString } from 'react-dom/server'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the site logo', () => {
    const html = renderToString(<Navbar />)
    expect(html).toContain('YESLINUX')
  })

  it('contains navigation links', () => {
    const html = renderToString(<Navbar />)
    expect(html).toContain('Início')
    expect(html).toContain('Universo InfoSec')
    expect(html).toContain('Serviços')
    expect(html).toContain('Sobre Nós')
    expect(html).toContain('Contato')
  })

  it('shows contact information', () => {
    const html = renderToString(<Navbar />)
    expect(html).toContain('contato@yeslinux.com.br')
    expect(html).toContain('+55 (11) 96160-0500')
  })
})
