import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as fs from 'fs'

// Provide explicit factory to control return value per test
vi.mock('fs', () => ({
  readFileSync: vi.fn(),
}))

const SAMPLE = `// AUTO-GENERATED\nexport const sections = [\n {\n  "title": "Autenticação",\n  "slug": "authentication",\n  "description": "desc",\n  "icon": "password",\n  "color": "yellow",\n  "checklist": [{"point":"a","priority":"essential","details":"d"}]\n }\n] as const;`

describe('loadPscSections', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('parses generated checklist array with as const', async () => {
    ;(fs.readFileSync as unknown as ReturnType<typeof vi.fn>).mockReturnValue(SAMPLE)
    const { loadPscSections } = await import('./psc-data')
    const result = loadPscSections()
    expect(result.length).toBe(1)
    expect(result[0].slug).toBe('authentication')
    expect(result[0].checklist.length).toBe(1)
  })

  it('returns empty array when file not found or malformed', async () => {
    ;(fs.readFileSync as unknown as ReturnType<typeof vi.fn>).mockImplementation(() => { throw new Error('ENOENT') })
    const { loadPscSections } = await import('./psc-data')
    const result = loadPscSections()
    expect(result).toEqual([])
  })
})
