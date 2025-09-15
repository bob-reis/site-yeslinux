import type { Sections } from '@/types/psc'

export const SECTIONS_S1: Sections = [
  {
    title: 'S1',
    slug: 's1',
    description: 'd',
    icon: 'password',
    color: 'yellow',
    checklist: [
      { point: 'a', priority: 'essential', details: 'd' },
      { point: 'b', priority: 'optional', details: 'd' },
      { point: 'c', priority: 'advanced', details: 'd' },
    ],
  },
]

export function seedProgressS1(indexMap: Record<number, boolean> = { 0: true }) {
  localStorage.clear()
  localStorage.setItem('psc:s1:checks', JSON.stringify(indexMap))
}

