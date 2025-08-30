import { renderToString } from 'react-dom/server'
import BlogSection from './BlogSection'

describe('BlogSection', () => {
  it('renders the blog section with correct heading', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('Blog')
    expect(html).toContain('Conteúdo')
  })

  it('displays the correct description', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('Conhecimento é a maior defesa')
  })

  it('shows placeholder for future development', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('[Seção do Blog será desenvolvida]')
  })

  it('has proper CSS classes for styling', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('py-20 bg-dark')
    expect(html).toContain('container mx-auto px-4')
    expect(html).toContain('text-primary')
  })

  it('is structured as a semantic section element', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('<section')
  })
})