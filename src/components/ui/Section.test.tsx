import { renderToString } from 'react-dom/server'
import Section from './Section'

describe('Section component', () => {
  it('renders title, highlight, description and children', () => {
    const html = renderToString(
      <Section highlight="Test" title="Section" description="Description">
        <div>Child content</div>
      </Section>
    )

    expect(html).toContain('Test')
    expect(html).toContain('Section')
    expect(html).toContain('Description')
    expect(html).toContain('Child content')
  })

  it('renders with proper semantic HTML structure', () => {
    const html = renderToString(
      <Section highlight="Test" title="Section" description="Description" />
    )
    expect(html).toContain('<section')
  })

  it('applies correct CSS classes for styling', () => {
    const html = renderToString(
      <Section highlight="Test" title="Section" description="Description" />
    )
    expect(html).toContain('py-20 bg-darker')
    expect(html).toContain('container mx-auto px-4')
    expect(html).toContain('text-primary')
  })

  it('renders highlight text with primary color', () => {
    const html = renderToString(
      <Section highlight="Highlighted" title="Title" description="Desc" />
    )
    expect(html).toContain('<span class="text-primary">Highlighted</span>')
  })

  it('renders with optional id attribute', () => {
    const html = renderToString(
      <Section id="test-section" highlight="Test" title="Section" description="Description" />
    )
    expect(html).toContain('id="test-section"')
  })

  it('renders without children when not provided', () => {
    const html = renderToString(
      <Section highlight="Test" title="Section" description="Description" />
    )
    expect(html).toContain('Test')
    expect(html).toContain('Section')
    expect(html).toContain('Description')
  })

  it('has responsive heading classes', () => {
    const html = renderToString(
      <Section highlight="Test" title="Section" description="Description" />
    )
    expect(html).toContain('text-3xl md:text-5xl')
  })
})
