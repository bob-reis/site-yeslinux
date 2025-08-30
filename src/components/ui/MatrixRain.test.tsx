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
})
