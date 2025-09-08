import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSICalculator from './ROSICalculator'

describe('ROSICalculator UI', () => {
  it('renders and performs a calculation', () => {
    render(<ROSICalculator />)

    // Fill inputs (by label)
    fireEvent.change(screen.getByLabelText(/Investimento Inicial/i), { target: { value: '50000' } })
    fireEvent.change(screen.getByLabelText(/Perda Potencial Anual/i), { target: { value: '300000' } })
    fireEvent.change(screen.getByLabelText(/Redução de Risco/i), { target: { value: '40' } })

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /calcular/i }))

    // Expect ROI to show
    expect(screen.getByText(/Resultados/i)).toBeInTheDocument()
    expect(screen.getByText(/Economia Anual/i)).toBeInTheDocument()
  })
})
