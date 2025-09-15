import fs from 'fs'
import path from 'path'
import type { Sections } from '@/types/psc'

let cache: Sections | null = null

export function loadPscSections(): Sections {
  if (cache) return cache
  const p = path.join(process.cwd(), 'personal-security-checklist', 'web', 'src', 'data', 'checklists.generated.ts')
  let raw: string
  try {
    raw = fs.readFileSync(p, 'utf-8')
  } catch (e) {
    // Fallback: if file missing, return empty
    cache = []
    return cache
  }
  // Extract the JSON array part from: export const sections: Sections = [ ... ];
  const match = raw.match(/export const sections[^=]*=\s*(\[[\s\S]*\]);/)
  if (!match) {
    cache = []
    return cache
  }
  const jsonText = match[1]
  try {
    cache = JSON.parse(jsonText) as Sections
  } catch (e) {
    cache = []
  }
  return cache
}

