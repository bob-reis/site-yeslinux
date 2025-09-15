import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Logo from './Logo'

describe('<Logo />', () => {
  it('points to root hash #inicio', () => {
    render(<Logo />)
    const link = screen.getByRole('link') as HTMLAnchorElement
    expect(link.getAttribute('href')).toBe('/#inicio')
  })
})

