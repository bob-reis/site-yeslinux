import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js fonts
vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-font-mock'
  })
}))

// Mock CSS imports
vi.mock('./src/app/globals.css', () => ({}))

// Mock Framer Motion para evitar warnings de SSR
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    p: 'p',
    button: 'button',
    span: 'span'
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useAnimation: () => ({
    start: vi.fn(),
    set: vi.fn()
  })
}))

// Mock window methods que podem ser usados nos componentes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock window.innerWidth para componentes que usam dimensões
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
})

Object.defineProperty(window, 'innerHeight', {
  writable: true,  
  configurable: true,
  value: 768,
})
