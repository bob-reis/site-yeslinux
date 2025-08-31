import { renderToString } from 'react-dom/server'
import HackerCard from './HackerCard'

describe('HackerCard', () => {
  it('renders title and description', () => {
    const html = renderToString(
      <HackerCard title="Pentest" description="Testes de intrusão" />
    )
    expect(html).toContain('Pentest')
    expect(html).toContain('Testes de intrusão')
  })
})
