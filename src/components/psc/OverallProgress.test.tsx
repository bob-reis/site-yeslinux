import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import OverallProgress from './OverallProgress'
import type { Sections } from '@/types/psc'

const sections: Sections = [
  { title: 'S1', slug: 's1', description: 'd', icon: 'password', color: 'yellow', checklist: [
    { point: 'a', priority: 'essential', details: 'd' },
    { point: 'b', priority: 'optional', details: 'd' },
  ]},
]

describe('<OverallProgress />', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('psc:s1:checks', JSON.stringify({ 0: true }))
  })

  it('shows total and done counts', () => {
    render(<OverallProgress sections={sections} />)
    expect(screen.getByText(/1\/2/)).toBeInTheDocument()
  })
})

