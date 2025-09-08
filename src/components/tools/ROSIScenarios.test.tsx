import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSIScenarios from './ROSIScenarios'

describe('ROSIScenarios', () => {
  it('shows empty placeholder', () => {
    render(<ROSIScenarios />)
    expect(screen.getByText(/Nenhum cenário salvo ainda/i)).toBeInTheDocument()
  })
})

