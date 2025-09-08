import { describe, it, expect } from 'vitest'
import { formatCurrencyBRL, formatPercent } from './format'

describe('format utils', () => {
  it('formats BRL currency', () => {
    const s = formatCurrencyBRL(1234.56)
    expect(s).toMatch(/R\$\s?1\.234,56|R\$\s?1.234,56/) // tolerate space variations
  })

  it('formats percent with default digits', () => {
    expect(formatPercent(12.3)).toBe('12.30%')
  })
})

