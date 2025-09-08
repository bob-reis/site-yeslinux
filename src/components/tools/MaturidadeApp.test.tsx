import { renderToString } from 'react-dom/server'
import MaturidadeApp from './MaturidadeApp'

describe('MaturidadeApp', () => {
  it('renders methodology section with start button', () => {
    const html = renderToString(<MaturidadeApp />)
    expect(html).toContain('id="methodologySection"')
    expect(html).toContain('Iniciar Avaliação')
  })

  it('renders questionnaire and results containers with expected ids', () => {
    const html = renderToString(<MaturidadeApp />)
    expect(html).toContain('id="questionnaireSection"')
    expect(html).toContain('id="resultsSection"')
    expect(html).toContain('id="domainTabs"')
    expect(html).toContain('id="questionsContainer"')
    expect(html).toContain('id="radarChart"')
    expect(html).toContain('id="barChart"')
  })

  it('renders charts grid with two chart cards side by side', () => {
    const html = renderToString(<MaturidadeApp />)
    // Grid class for 2 columns on md+
    expect(html).toContain('grid grid-cols-1 md:grid-cols-2')
    // Two chart-card wrappers
    const chartCards = (html.match(/class=\"[^\"]*chart-card[^\"]*\"/g) || []).length
    expect(chartCards).toBe(2)
  })
})
