import { renderToString } from 'react-dom/server'
import MatrixRain from './MatrixRain'

describe('MatrixRain', () => {
  it('renders without crashing', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('aria-hidden="true"')
  })

  it('has correct CSS classes for matrix background', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('fixed inset-0 pointer-events-none z-0 overflow-hidden')
  })

  it('is positioned as a fixed overlay', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('fixed')
    expect(html).toContain('inset-0')
  })

  it('has proper z-index for background positioning', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('z-0')
  })

  it('is non-interactive with pointer-events-none', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('pointer-events-none')
  })

  it('has accessibility attribute for screen readers', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('aria-hidden="true"')
  })

  it('prevents overflow with proper CSS class', () => {
    const html = renderToString(<MatrixRain />)
    expect(html).toContain('overflow-hidden')
  })
})
