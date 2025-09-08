import { render, screen, fireEvent } from '@/test-utils/render'
import { describe, it, expect } from 'vitest'
import ROSICalculator from './ROSICalculator'

describe('ROSICalculator UI', () => {
  it('renders and performs a calculation', () => {
    render(<ROSICalculator />)

    // Fill inputs
    const inputs = screen.getAllByRole('spinbutton') as HTMLInputElement[]
    // Order: investimento, perda, risco
    fireEvent.change(inputs[0], { target: { value: '50000' } })
    fireEvent.change(inputs[1], { target: { value: '300000' } })
    fireEvent.change(inputs[2], { target: { value: '40' } })

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /calcular/i }))

    // Expect ROI to show
    expect(screen.getByText(/Resultados/i)).toBeInTheDocument()
    expect(screen.getByText(/Economia Anual/i)).toBeInTheDocument()
  })
})

