import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSIReport from './ROSIReport'

describe('ROSIReport', () => {
  it('renders the report header', () => {
    render(<ROSIReport />)
    expect(screen.getByText(/YesLinux/i)).toBeInTheDocument()
    expect(screen.getByText(/Relatório de ROSI/i)).toBeInTheDocument()
  })
})

