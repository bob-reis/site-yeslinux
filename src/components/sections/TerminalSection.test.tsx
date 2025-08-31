import { renderToString } from 'react-dom/server'
import TerminalSection from './TerminalSection'

describe('TerminalSection', () => {
  it('renders the InfoSec universe section', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('Universo')
    expect(html).toContain('InfoSec')
  })

  it('displays the correct description', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('Explore o ecossistema completo da segurança da informação')
  })

  it('shows placeholder for 3D visualization', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('Visualização 3D do Universo InfoSec será implementada')
  })

  it('has proper styling classes', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('text-center text-gray-400')
  })

  it('has section id', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('id="universo"')
  })
})