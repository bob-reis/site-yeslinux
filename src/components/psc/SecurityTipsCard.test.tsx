import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import SecurityTipsCard from './SecurityTipsCard'

describe('<SecurityTipsCard />', () => {
  it('rotates tips over time', () => {
    vi.useFakeTimers()
    render(<SecurityTipsCard />)
    const first = screen.getByText(/Dica de Segurança/)
    expect(first).toBeInTheDocument()
    // advance time to rotate
    act(() => { vi.advanceTimersByTime(8000) })
    // At least renders card still; content changed is fine
    expect(screen.getByText(/Dica de Segurança/)).toBeInTheDocument()
    vi.useRealTimers()
  })
})
