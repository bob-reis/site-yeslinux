import { renderToString } from 'react-dom/server'
import ToolsIndexPage from './page'

describe('ToolsIndexPage', () => {
  it('renders tools index with card', () => {
    const html = renderToString(<ToolsIndexPage />)
    expect(html).toContain('<main')
    expect(html).toContain('YesLinux Tools')
    expect(html).toContain('Gerador de E-mails e Wordlists')
  })
})

