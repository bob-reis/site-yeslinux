import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import PscIcon from './PscIcon'

const names = ['password','browser','email','messaging','social','network','mobile','computer','home','finance','human','physical','unknown'] as const

describe('<PscIcon />', () => {
  it('renders an svg for each icon name', () => {
    names.forEach((n) => {
      const { container, unmount } = render(<PscIcon name={n as any} />)
      const svg = container.querySelector('svg')
      expect(svg).not.toBeNull()
      unmount()
    })
  })
})

