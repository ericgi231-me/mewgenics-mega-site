type GameObject = {
  name: string
  icon_path: string
  description: string
  description2?: string
  unlock?: string
  notes?: {
    label: string
    content: string
  }[]
}

export type { GameObject };