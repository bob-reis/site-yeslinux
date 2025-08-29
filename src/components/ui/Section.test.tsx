import { render, screen } from '@testing-library/react'
import Section from './Section'

describe('Section component', () => {
  it('renders title, highlight, description and children', () => {
    render(
      <Section highlight="Test" title="Section" description="Description">
        <div>Child content</div>
      </Section>
    )

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Section')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })
})
