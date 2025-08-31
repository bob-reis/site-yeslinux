import { readFileSync } from 'fs'
import { resolve } from 'path'

describe('static index.html', () => {
  it('uses a responsive grid for service cards', () => {
    const html = readFileSync(resolve(__dirname, 'index.html'), 'utf-8')
    expect(html).toContain('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8')
  })
})
