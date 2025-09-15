import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import PriorityDashboard from './PriorityDashboard'
import type { Sections } from '@/types/psc'

const sections: Sections = [
  { title: 'S1', slug: 's1', description: 'd', icon: 'password', color: 'yellow', checklist: [
    { point: 'a', priority: 'essential', details: 'd' },
    { point: 'b', priority: 'optional', details: 'd' },
    { point: 'c', priority: 'advanced', details: 'd' },
  ]},
]

describe('<PriorityDashboard />', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('psc:s1:checks', JSON.stringify({ 0: true }))
  })

  it('renders gauges and labels with counts', () => {
    render(<PriorityDashboard sections={sections} />)
    expect(screen.getByText('Essencial')).toBeInTheDocument()
    expect(screen.getByText('Opcional')).toBeInTheDocument()
    expect(screen.getByText('Avançado')).toBeInTheDocument()
  })
})

