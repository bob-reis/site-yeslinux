import { renderToString } from 'react-dom/server'
import Page from './page'

describe('EmailWordlist tool page', () => {
  it('renders main and tool title', () => {
    const html = renderToString(<Page />)
    expect(html).toContain('<main')
    expect(html).toContain('Gerador de E-mails e Wordlists')
  })
})

