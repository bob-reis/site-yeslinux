import fs from 'fs'
import path from 'path'
import type { Sections } from '@/types/psc'

let cache: Sections | null = null

function extractArray(source: string): string | null {
  const anchor = source.indexOf('export const sections')
  if (anchor === -1) return null
  const startBracket = source.indexOf('[', anchor)
  if (startBracket === -1) return null
  let depth = 0
  let i = startBracket
  for (; i < source.length; i++) {
    const ch = source[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) {
        // include closing bracket
        const arr = source.slice(startBracket, i + 1)
        return arr
      }
    }
  }
  return null
}

export function loadPscSections(): Sections {
  if (cache) return cache
  const p = path.join(process.cwd(), 'personal-security-checklist', 'web', 'src', 'data', 'checklists.generated.ts')
  let raw: string
  try {
    raw = fs.readFileSync(p, 'utf-8')
  } catch {
    cache = []
    return cache
  }

  const jsonArray = extractArray(raw)
  if (!jsonArray) {
    cache = []
    return cache
  }
  try {
    cache = JSON.parse(jsonArray) as Sections
  } catch {
    cache = []
  }
  return cache
}
