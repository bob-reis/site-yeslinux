import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSICharts from './ROSICharts'

describe('ROSICharts', () => {
  it('asks to calculate first when no result', () => {
    render(<ROSICharts />)
    expect(screen.getByText(/Calcule primeiro/i)).toBeInTheDocument()
  })
})

