import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as fs from 'fs'

vi.mock('fs')

const SAMPLE = `// AUTO-GENERATED\nexport const sections = [\n {\n  "title": "Autenticação",\n  "slug": "authentication",\n  "description": "desc",\n  "icon": "password",\n  "color": "yellow",\n  "checklist": [{"point":"a","priority":"essential","details":"d"}]\n }\n] as const;`

describe('loadPscSections', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('parses generated checklist array with as const', async () => {
    vi.spyOn(fs, 'readFileSync').mockReturnValue(SAMPLE as unknown as Buffer)
    const { loadPscSections } = await import('./psc-data')
    const result = loadPscSections()
    expect(result.length).toBe(1)
    expect(result[0].slug).toBe('authentication')
    expect(result[0].checklist.length).toBe(1)
  })

  it('returns empty array when file not found or malformed', async () => {
    vi.spyOn(fs, 'readFileSync').mockImplementation(() => { throw new Error('ENOENT') })
    const { loadPscSections } = await import('./psc-data')
    const result = loadPscSections()
    expect(result).toEqual([])
  })
})

