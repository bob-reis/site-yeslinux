import { renderToString } from 'react-dom/server'
import GamificationSection from './GamificationSection'

describe('GamificationSection', () => {
  it('renders as a simple placeholder div', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('<div')
  })

  it('has placeholder styling classes', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('text-center text-gray-500 py-4')
  })

  it('renders without errors', () => {
    const html = renderToString(<GamificationSection />)
    expect(html.length).toBeGreaterThan(0)
  })

  it('is a minimal component for future development', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('class="text-center text-gray-500 py-4"')
  })
})
