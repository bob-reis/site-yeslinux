import { renderToString } from 'react-dom/server'
import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders the loading spinner with all elements', () => {
    const html = renderToString(<LoadingSpinner />)
    expect(html).toContain('Inicializando sistema')
    expect(html).toContain('██    ██ ███████')
  })

  it('has proper CSS classes for styling', () => {
    const html = renderToString(<LoadingSpinner />)
    expect(html).toContain('flex items-center justify-center min-h-screen')
    expect(html).toContain('animate-spin')
    expect(html).toContain('animate-pulse')
  })

  it('renders ASCII art logo correctly', () => {
    const html = renderToString(<LoadingSpinner />)
    expect(html).toContain('<pre>')
    expect(html).toContain('███████')
  })
})
