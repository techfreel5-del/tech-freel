import { createContext, useContext, useState, ReactNode } from 'react'
import { setContent, notifyContent, getAllOverrides, resetAllContent } from '@/store/contentStore'
import type { SectionConfig } from '@/data/content/types'

interface EditorCtx {
  editMode: boolean
  toggleEditMode: () => void
  activeSectionId: string | null
  openSection: (id: string, config: SectionConfig) => void
  closeSection: () => void
  activeSectionConfig: SectionConfig | null
  setField: (key: string, value: string) => void
  exportContent: () => void
  resetContent: () => void
}

const Ctx = createContext<EditorCtx | null>(null)

export function EditorProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  const [activeSectionConfig, setActiveSectionConfig] = useState<SectionConfig | null>(null)

  const toggleEditMode = () => {
    setEditMode(v => !v)
    setActiveSectionId(null)
    setActiveSectionConfig(null)
  }

  const openSection = (id: string, config: SectionConfig) => {
    setActiveSectionId(id)
    setActiveSectionConfig(config)
  }

  const closeSection = () => {
    setActiveSectionId(null)
    setActiveSectionConfig(null)
  }

  const setField = (key: string, value: string) => {
    setContent(key, value)
    notifyContent()
  }

  const exportContent = () => {
    const data = getAllOverrides()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'techfreel-content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const resetContent = () => {
    if (!confirm('¿Resetear todo el contenido editado a los valores originales?')) return
    resetAllContent()
    notifyContent()
    closeSection()
  }

  return (
    <Ctx.Provider value={{ editMode, toggleEditMode, activeSectionId, openSection, closeSection, activeSectionConfig, setField, exportContent, resetContent }}>
      {children}
    </Ctx.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useEditor must be used inside EditorProvider')
  return ctx
}
