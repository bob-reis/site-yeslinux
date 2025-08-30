import { renderToString } from 'react-dom/server'
import TerminalSection from './TerminalSection'

describe('TerminalSection', () => {
  it('renders with correct props passed to Section component', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('YesLinux')
    expect(html).toContain('Shell')
  })

  it('displays the correct description', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('Explore nossa empresa através do terminal')
  })

  it('shows placeholder for future terminal development', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('[Terminal Interativo será desenvolvido]')
  })

  it('uses the Section wrapper component', () => {
    const html = renderToString(<TerminalSection />)
    // Since it uses Section component, it should have section structure
    expect(html).toContain('<section')
  })

  it('has proper styling classes', () => {
    const html = renderToString(<TerminalSection />)
    expect(html).toContain('text-center text-text-muted')
  })
})