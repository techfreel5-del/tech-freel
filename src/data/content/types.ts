export interface ContentField {
  key: string
  label: string
  type: 'text' | 'textarea' | 'image'
  defaultValue: string
}

export interface SectionConfig {
  id: string       // e.g. 'home1.s1'
  name: string     // e.g. 'S1 — Hero'
  fields: ContentField[]
}
