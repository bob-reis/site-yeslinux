import { renderToString } from 'react-dom/server'
import BlogSection from './BlogSection'

describe('BlogSection', () => {
  it('renders as a simple placeholder div', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('<div')
  })

  it('has placeholder styling classes', () => {
    const html = renderToString(<BlogSection />)
    expect(html).toContain('text-center text-gray-500 py-4')
  })

  it('renders without errors', () => {
    const html = renderToString(<BlogSection />)
    expect(html.length).toBeGreaterThan(0)
  })

  it('is a minimal component for future development', () => {
    const html = renderToString(<BlogSection />)
    // Just verify it renders basic structure
    expect(html).toContain('class="text-center text-gray-500 py-4"')
  })
})