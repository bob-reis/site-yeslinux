import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, it, expect } from 'vitest'
import StatsSection from './StatsSection'

describe('StatsSection', () => {
  it('renders statistics cards correctly', () => {
    render(<StatsSection />)
    
    // Check for statistics values
    expect(screen.getByText('500+')).toBeTruthy()
    expect(screen.getByText('24/7')).toBeTruthy()
    expect(screen.getByText('100%')).toBeTruthy()
    expect(screen.getByText('5+')).toBeTruthy()
    
    // Check for statistics labels
    expect(screen.getByText('Projetos Seguros')).toBeTruthy()
    expect(screen.getByText('Monitoramento')).toBeTruthy()
    expect(screen.getByText('Software Livre')).toBeTruthy()
    expect(screen.getByText('Anos de Experi�ncia')).toBeTruthy()
  })

  it('renders the CTA button', () => {
    render(<StatsSection />)
    expect(screen.getByText('Fale com um Especialista')).toBeTruthy()
  })

  it('renders proper HTML structure', () => {
    const html = renderToString(<StatsSection />)
    expect(html).toContain('<section')
    expect(html).toContain('py-16')
    expect(html).toContain('bg-darker/30')
  })

  it('includes proper CSS classes for styling', () => {
    const html = renderToString(<StatsSection />)
    expect(html).toContain('card-cyber')
    expect(html).toContain('btn-cyber')
    expect(html).toContain('text-primary')
    expect(html).toContain('text-secondary')
    expect(html).toContain('text-accent')
  })

  it('has proper grid layout for statistics', () => {
    const html = renderToString(<StatsSection />)
    expect(html).toContain('grid-cols-2')
    expect(html).toContain('md:grid-cols-4')
    expect(html).toContain('mt-12')
  })
})