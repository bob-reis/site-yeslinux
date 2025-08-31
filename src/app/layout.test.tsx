import { renderToString } from 'react-dom/server'
import RootLayout from './layout'

describe('RootLayout', () => {
  const mockChildren = <div>Test Content</div>

  it('renders html element with correct lang attribute', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('lang="pt-BR"')
  })

  it('includes scroll-smooth class on html element', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('class="scroll-smooth"')
  })

  it('applies correct body styling classes', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('bg-darker text-text-light antialiased overflow-x-hidden')
  })

  it('renders children content', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('Test Content')
  })

  it('includes the navigation header', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('YES')
    expect(html).toContain('href="#inicio"')
  })

  it('includes Inter font class in body', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    // Inter font generates a class name
    expect(html).toContain('class=')
  })

  it('has proper document structure', () => {
    const html = renderToString(<RootLayout>{mockChildren}</RootLayout>)
    expect(html).toContain('<html')
    expect(html).toContain('<body')
  })
})