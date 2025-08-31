import { renderToString } from 'react-dom/server'
import ServicesSection from './ServicesSection'

// Mock the Section component
vi.mock('../ui/Section', () => ({
  default: ({ highlight, title, description, children }: any) => (
    <div>
      <span>{highlight}</span>
      <span>{title}</span>
      <p>{description}</p>
      {children}
    </div>
  ),
}))

describe('ServicesSection', () => {
  it('renders with correct props passed to Section component', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('Nossos')
    expect(html).toContain('Serviços')
    expect(html).toContain('Soluções completas em segurança digital e software livre')
  })
  
  it('renders hacker cards with services', () => {
    const html = renderToString(<ServicesSection />)
    expect(html).toContain('Pentest')
    expect(html).toContain('Consultoria')
    expect(html).toContain('Treinamentos')
  })
})
