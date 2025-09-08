import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSIReport from './ROSIReport'

describe('ROSIReport', () => {
  it('renders the report header', () => {
    render(<ROSIReport />)
    // Header markers
    expect(screen.getByText('Relatório de ROSI')).toBeInTheDocument()
    // Brand appears at least once (header or footer tagline)
    expect(screen.getAllByText(/YesLinux/i).length).toBeGreaterThan(0)
  })
})
