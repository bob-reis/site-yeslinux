import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Gauge from './Gauge'

describe('<Gauge />', () => {
  it('renders an SVG with animated path', () => {
    render(<Gauge pct={50} color="#00ff41" />)
    const svgs = document.getElementsByTagName('svg')
    expect(svgs.length).toBeGreaterThan(0)
    const paths = document.getElementsByTagName('path')
    expect(paths.length).toBeGreaterThan(1)
  })
})

