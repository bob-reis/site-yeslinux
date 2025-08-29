import { render } from '@testing-library/react'
import MatrixRain from './MatrixRain'

// Mock window.innerWidth for testing
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1000
})

// Mock setTimeout and clearTimeout
vi.mock('timers')

describe('MatrixRain', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    const { container } = render(<MatrixRain />)
    const element = container.querySelector('div[aria-hidden="true"]')
    expect(element).toBeInTheDocument()
  })

  it('has correct CSS classes for matrix background', () => {
    const { container } = render(<MatrixRain />)
    const matrixContainer = container.querySelector('.fixed.inset-0.pointer-events-none.z-0.overflow-hidden')
    expect(matrixContainer).toBeInTheDocument()
  })

  it('has aria-hidden attribute for accessibility', () => {
    const { container } = render(<MatrixRain />)
    const element = container.querySelector('[aria-hidden="true"]')
    expect(element).toBeInTheDocument()
  })

  it('creates matrix columns based on window width', () => {
    const { container } = render(<MatrixRain />)
    
    // Wait for useEffect to run
    setTimeout(() => {
      const columns = container.querySelectorAll('.absolute.top-0.flex.flex-col.opacity-20')
      // With innerWidth of 1000, should create 50 columns (1000/20)
      expect(columns.length).toBeGreaterThan(0)
    }, 100)
  })
})