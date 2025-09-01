import { renderToString } from 'react-dom/server'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the main element', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('<main')
  })

  it('includes all major sections', () => {
    const html = renderToString(<HomePage />)
    
    // Check for content from each section component
    expect(html).toContain('YesLinux') // From HeroSection
    expect(html).toContain('Nossa Missão') // From AboutSection  
    expect(html).toContain('Serviços') // From ServicesSection
  })

  it('renders components without errors', () => {
    const html = renderToString(<HomePage />)
    
    // Just verify the components render and produce HTML
    expect(html.length).toBeGreaterThan(0)
    expect(html).toContain('<main')
    
    // Verify it contains content from various sections
    const hasYesLinux = html.includes('YesLinux')
    const hasBlog = html.includes('Blog')
    
    // At least some content should be present
    expect(hasYesLinux || hasBlog).toBe(true)
  })

  it('has semantic HTML structure', () => {
    const html = renderToString(<HomePage />)
    expect(html).toContain('<main')
    expect(html).toContain('<section') // From child components
  })
})
