import { renderToString } from 'react-dom/server'
import SimpleTest from './page'

describe('SimpleTest Page', () => {
  it('renders the main heading correctly', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('🚀 YesLinux - Teste Simples')
  })

  it('shows system status checks', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('✅ Next.js funcionando')
    expect(html).toContain('✅ Tailwind CSS funcionando')
    expect(html).toContain('✅ TypeScript compilando')
  })

  it('includes terminal-style command section', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('$ whoami')
    expect(html).toContain('YesLinux Consultoria em Software Livre')
  })

  it('has proper background and text colors', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('bg-black text-green-500')
  })

  it('uses semantic spacing classes', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('min-h-screen')
    expect(html).toContain('space-y-4')
  })

  it('styles the terminal section correctly', () => {
    const html = renderToString(<SimpleTest />)
    expect(html).toContain('bg-gray-900 p-4 rounded border border-green-500')
    expect(html).toContain('text-green-400')
  })
})