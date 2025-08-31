import { renderToString } from 'react-dom/server'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  it('renders the main heading', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('Sobre')
    expect(html).toContain('Nós')
  })

  it('renders company mission and story', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('YesLinux')
    expect(html).toContain('democratizar a segurança digital')
    expect(html).toContain('software livre')
    expect(html).toContain('desenvolvimento seguro')
    expect(html).toContain('investigação cibernética')
    expect(html).toContain('defesa de infraestruturas críticas')
  })

  it('has proper semantic structure', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('id="sobre"')
    expect(html).toContain('<section')
  })

  it('renders complete company description', () => {
    const html = renderToString(<AboutSection />)
    expect(html).toContain('transparência, inovação e proteção')
    expect(html).toContain('soluções robustas')
  })
})
