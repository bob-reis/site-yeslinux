import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ClearProgressButton from './ClearProgressButton'

describe('<ClearProgressButton />', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('psc:x:checks', JSON.stringify({ 0: true }))
    vi.spyOn(window, 'confirm').mockReturnValue(true as any)
    vi.spyOn(window.location, 'reload').mockImplementation(() => {})
  })

  it('clears local progress and reloads', () => {
    render(<ClearProgressButton />)
    fireEvent.click(screen.getByRole('button', { name: /limpar progresso/i }))
    expect(localStorage.getItem('psc:x:checks')).toBeNull()
  })
})

