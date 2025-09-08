import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ROSIResults from './ROSIResults'

describe('ROSIResults', () => {
  it('shows placeholder when no result', () => {
    render(<ROSIResults />)
    expect(screen.getByText(/Preencha os campos e clique em Calcular/i)).toBeInTheDocument()
  })
})

