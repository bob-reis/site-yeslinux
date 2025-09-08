import { renderToString } from 'react-dom/server'
import Page, { metadata } from './page'

describe('Tools/Maturidade page', () => {
  it('exports metadata and renders without crashing', () => {
    expect(metadata).toBeTruthy()
    const html = renderToString(<Page />)
    expect(html).toContain('Maturidade em Segurança')
  })
})

