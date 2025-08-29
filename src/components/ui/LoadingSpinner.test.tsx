import { render, screen } from '@testing-library/react'
import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders the loading spinner with all elements', () => {
    render(<LoadingSpinner />)
    
    expect(screen.getByText('Inicializando sistema')).toBeInTheDocument()
    expect(screen.getByText(/YES LINUX/)).toBeInTheDocument()
  })

  it('has proper CSS classes for styling', () => {
    const { container } = render(<LoadingSpinner />)
    
    const spinnerContainer = container.querySelector('.flex.items-center.justify-center.min-h-screen')
    expect(spinnerContainer).toBeInTheDocument()
    
    const animatedSpinner = container.querySelector('.animate-spin')
    expect(animatedSpinner).toBeInTheDocument()
    
    const progressBar = container.querySelector('.animate-pulse')
    expect(progressBar).toBeInTheDocument()
  })

  it('renders ASCII art logo correctly', () => {
    render(<LoadingSpinner />)
    
    const asciiArt = screen.getByText(/YES LINUX/)
    expect(asciiArt).toBeInTheDocument()
    expect(asciiArt.closest('pre')).toBeInTheDocument()
  })
})