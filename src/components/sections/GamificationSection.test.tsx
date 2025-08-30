import { renderToString } from 'react-dom/server'
import GamificationSection from './GamificationSection'

describe('GamificationSection', () => {
  it('renders the section heading', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('Security')
    expect(html).toContain('Challenge')
  })

  it('renders the description', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('Teste seus conhecimentos em segurança digital')
  })

  it('renders placeholder content', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('[Seção de Gamificação será desenvolvida]')
  })

  it('includes a section element', () => {
    const html = renderToString(<GamificationSection />)
    expect(html).toContain('<section')
  })
})
