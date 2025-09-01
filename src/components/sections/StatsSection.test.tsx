import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import StatsSection from './StatsSection'

describe('StatsSection', () => {
  it('renders all statistics values and labels', () => {
    render(<StatsSection />)

    const values = ['500+', '24/7', '100%', '5+']
    const labels = ['Projetos Seguros', 'Monitoramento', 'Software Livre', 'Anos de Experiência']

    values.forEach(v => expect(screen.getByText(v)).toBeTruthy())
    labels.forEach(l => expect(screen.getByText(l)).toBeTruthy())
  })

  it('renders proper HTML structure and grid', () => {
    const html = renderToString(<StatsSection />)
    expect(html).toContain('<section')
    expect(html).toContain('grid-cols-2')
    expect(html).toContain('md:grid-cols-4')
    expect(html).toContain('card-cyber')
  })
})
