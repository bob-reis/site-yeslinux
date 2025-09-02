import { describe, it, expect } from 'vitest'
import { isValidDomain } from './validation'

describe('isValidDomain', () => {
  it('accepts valid domains', () => {
    const domains = [
      'example.com',
      'sub.example.com',
      'corp.co.uk',
      'a-b.example.io',
      'teste.org.br',
    ]
    for (const d of domains) expect(isValidDomain(d)).toBe(true)
  })

  it('rejects invalid domains', () => {
    const invalid = [
      '',
      'example',
      '-bad.example.com',
      'bad-.example.com',
      'bad..example.com',
      'exa mple.com',
      'example.c',
      'example.verylongtldthatshouldnotpassbecauseitsexceedssixtythreecharactersxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ]
    for (const d of invalid) expect(isValidDomain(d)).toBe(false)
  })
})

