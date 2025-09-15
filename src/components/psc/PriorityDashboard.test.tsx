import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import PriorityDashboard from './PriorityDashboard'
import { SECTIONS_S1, seedProgressS1 } from './test-utils'

describe('<PriorityDashboard />', () => {
  beforeEach(() => seedProgressS1({ 0: true }))

  it('renders gauges and labels with counts', () => {
    render(<PriorityDashboard sections={SECTIONS_S1} />)
    expect(screen.getByText('Essencial')).toBeInTheDocument()
    expect(screen.getByText('Opcional')).toBeInTheDocument()
    expect(screen.getByText('Avançado')).toBeInTheDocument()
  })
})
