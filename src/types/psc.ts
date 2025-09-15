export type Priority = 'essential' | 'optional' | 'advanced'

export interface ChecklistItem {
  point: string
  priority: Priority
  details: string
}

export interface Section {
  title: string
  slug: string
  description: string
  icon: string
  color: string
  intro?: string
  checklist: ChecklistItem[]
}

export type Sections = Section[]

