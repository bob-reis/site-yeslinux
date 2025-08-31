import render from '@/test-utils/render'
import HackerCard from './HackerCard'

describe('HackerCard', () => {
  it('renders title and description', () => {
    const html = render(<HackerCard title="Pentest" description="Testes de intrusão" />)
    expect(html).toContain('Pentest')
    expect(html).toContain('Testes de intrusão')
  })
})
