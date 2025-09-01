import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CTASection from './CTASection'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>
  }
}))

describe('CTASection', () => {
  it('renders the CTA button correctly', () => {
    render(<CTASection />)
    
    const ctaButton = screen.getByRole('button', { name: /fale com um especialista/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveClass('btn-cyber')
  })

  it('renders with correct section structure', () => {
    const { container } = render(<CTASection />)
    
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-16', 'relative', 'bg-darker/30')
  })

  it('has proper container structure', () => {
    const { container } = render(<CTASection />)
    
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
    expect(containerDiv).toHaveClass('mx-auto', 'px-4')
  })
})