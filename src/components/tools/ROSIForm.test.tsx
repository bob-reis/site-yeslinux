import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSIForm from './ROSIForm'

describe('ROSIForm input sanitization', () => {
  it('keeps only digits in numeric text inputs', () => {
    render(<ROSIForm />)

    const investment = screen.getByLabelText(/Investimento Inicial/i) as HTMLInputElement
    const loss = screen.getByLabelText(/Perda Potencial Anual/i) as HTMLInputElement
    const risk = screen.getByLabelText(/Redução de Risco/i) as HTMLInputElement

    fireEvent.change(investment, { target: { value: '12a3' } })
    fireEvent.change(loss, { target: { value: 'x9y9z' } })
    fireEvent.change(risk, { target: { value: '105x' } })

    expect(investment.value).toBe('123')
    expect(loss.value).toBe('99')
    expect(risk.value).toBe('105')
  })
})

