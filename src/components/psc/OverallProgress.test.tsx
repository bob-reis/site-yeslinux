import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import OverallProgress from './OverallProgress'
import { SECTIONS_S1, seedProgressS1 } from './test-utils'

describe('<OverallProgress />', () => {
  beforeEach(() => seedProgressS1({ 0: true }))

  it('shows total and done counts', () => {
    render(<OverallProgress sections={SECTIONS_S1} />)
    const wrapper = screen.getByText('Progresso geral').parentElement as HTMLElement
    expect(wrapper).toHaveTextContent(/1\s*\/\s*3/)
  })
})
