import { describe, it, expect } from 'vitest'
import { generateEmails, generateWordlist, generateUsernames, normalize, preview, limits } from './emailWordlist'

describe('email/wordlist generator', () => {
  it('normalizes diacritics and casing', () => {
    expect(normalize('Âna Çésar')).toBe('ana cesar')
  })

  it('generates email permutations with providers, custom domains and dedupes', () => {
    const emails = generateEmails({
      firstName: 'João',
      lastName: 'Silva',
      providers: ['gmail.com','hotmail.com'],
      customDomains: ['empresa.com.br'],
      knownUsernames: ['j.silva']
    })
    expect(emails.some(e => e.startsWith('joao.silva@'))).toBe(true)
    expect(emails.some(e => e === 'jsilva@gmail.com')).toBe(true)
    expect(emails.some(e => e.endsWith('@empresa.com.br'))).toBe(true)
    expect(new Set(emails).size).toBe(emails.length)
    expect(emails.length).toBeGreaterThan(1)
    expect(emails.length).toBeLessThanOrEqual(limits.MAX_EMAILS)
  })

  it('does not fallback to defaults when providers are explicitly empty and only custom domains are provided', () => {
    const emails = generateEmails({ firstName: 'Ana', lastName: 'Cesar', providers: [], customDomains: ['corp.com'] })
    expect(emails.every(e => e.endsWith('@corp.com'))).toBe(true)
  })

  it('limits preview', () => {
    const list = Array.from({ length: 200 }, (_, i) => String(i))
    expect(preview(list).length).toBe(limits.PREVIEW_LIMIT)
  })

  it('generates wordlist with rules, length and composition constraints', () => {
    const pw = generateWordlist({ firstName: 'joao', lastName: 'silva', middleName: 'souza', birthDate: '01/01/1990', extraYearOrNumber: '2025', knownUsernames: ['jsilva'] })
    expect(pw.length).toBeGreaterThan(10)
    expect(pw.every(p => p.length >= 6 && p.length <= 20)).toBe(true)
    expect(pw.every(p => /\d/.test(p) && /[A-Za-z]/.test(p))).toBe(true)
    // Leet/variants presence
    expect(pw.some(p => /j0ao/i.test(p) || /s1lva/i.test(p))).toBe(true)
    expect(pw.length).toBeLessThanOrEqual(limits.MAX_PASSWORDS)
  })

  it('generates usernames based on name patterns and known usernames', () => {
    const us = generateUsernames({ firstName: 'Joao', lastName: 'Silva', knownUsernames: ['j.silva'] })
    expect(us.some(u => u === 'jsilva')).toBe(true)
    expect(us.some(u => u === 'joao.silva')).toBe(true)
    expect(us.some(u => u === 'j.silva')).toBe(true)
    expect(us.length).toBeLessThanOrEqual(limits.MAX_USERNAMES)
  })
})
