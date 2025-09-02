import render from '@/test-utils/render'
import Footer from './Footer'

describe('Footer', () => {
  let html: string

  beforeAll(() => {
    html = render(<Footer />)
  })

  it('renders the brand', () => {
    expect(html).toContain('<span class="text-primary">YES</span>')
    expect(html).toContain('<span class="text-white">LINUX</span>')
  })

  it('contains quick navigation links', () => {
    ;['Início', 'Sobre', 'Serviços'].forEach(label => expect(html).toContain(label))
  })

  it('shows contact info and social links', () => {
    expect(html).toContain('contato@yeslinux.com.br')
    expect(html).toContain('+55 (11) 96160-0500')
    ;['LinkedIn', 'GitHub', 'Website'].forEach(label => expect(html).toContain(label))
  })

  it('includes the current year', () => {
    const year = new Date().getFullYear().toString()
    expect(html).toContain(year)
  })
})
