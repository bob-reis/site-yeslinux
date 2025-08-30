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
})
