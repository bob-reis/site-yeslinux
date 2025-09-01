import render from '@/test-utils/render'
import Navbar from './Navbar'

describe('Navbar', () => {
  let html: string

  beforeAll(() => {
    html = render(<Navbar />)
  })

  it('renders the site logo', () => {
    expect(html).toContain('<span class="text-primary">YES</span>')
    expect(html).toContain('<span class="text-white">LINUX</span>')
  })

  it('contains navigation links', () => {
    const links = ['Início', 'Nossos Números', 'Serviços', 'Sobre']
    links.forEach(link => expect(html).toContain(link))
  })

  it('shows contact information', () => {
    expect(html).toContain('contato@yeslinux.com.br')
    expect(html).toContain('+55 (11) 96160-0500')
  })
})
