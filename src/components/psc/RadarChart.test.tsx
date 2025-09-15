import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import RadarChart from './RadarChart'
import type { Sections } from '@/types/psc'

const sections: Sections = [
  { title: 'Autenticação', slug: 'authentication', description: 'd', icon: 'password', color: 'yellow', checklist: [
    { point: 'a', priority: 'essential', details: 'd' }
  ]},
  { title: 'Navegação Web', slug: 'web', description: 'd', icon: 'browser', color: 'blue', checklist: [
    { point: 'a', priority: 'optional', details: 'd' }
  ]},
]

describe('<RadarChart />', () => {
  it('renders svg and labels', () => {
    render(<RadarChart sections={sections} />)
    expect(screen.getByLabelText('Gráfico de radar de progresso por seção')).toBeInTheDocument()
  })
})

