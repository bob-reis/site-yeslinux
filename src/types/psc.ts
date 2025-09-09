export type Priority = 'essential' | 'optional' | 'advanced'

export interface ChecklistItem {
  point: string
  priority: Priority
  details: string
}

export interface LinkItem {
  title: string
  url: string
  description?: string
}

export interface Section {
  title: string
  slug: string
  description: string
  intro: string
  icon: string
  color: string
  checklist: ChecklistItem[]
  softwareLinks?: LinkItem[]
  helpfulTools?: LinkItem[]
  furtherResources?: LinkItem[]
}

export type ChecklistData = Section[]

