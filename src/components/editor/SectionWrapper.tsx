import { ReactNode } from 'react'
import { useEditor } from '@/context/EditorContext'
import type { SectionConfig } from '@/data/content/types'

interface Props {
  config: SectionConfig
  children: ReactNode
}

export function SectionWrapper({ config, children }: Props) {
  const { editMode, openSection, activeSectionId } = useEditor()

  if (!editMode) return <>{children}</>

  const isActive = activeSectionId === config.id

  return (
    <div
      onClick={(e) => { e.stopPropagation(); openSection(config.id, config) }}
      style={{
        position: 'relative',
        outline: isActive ? '2px solid #6366f1' : '2px dashed rgba(99,102,241,0.4)',
        cursor: 'pointer',
        transition: 'outline-color 0.2s',
      }}
    >
      {/* Label badge */}
      <div
        style={{
          position: 'absolute',
          top: 6,
          left: 6,
          zIndex: 99999,
          background: isActive ? '#6366f1' : 'rgba(99,102,241,0.85)',
          color: '#fff',
          fontSize: 10,
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: 4,
          pointerEvents: 'none',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        }}
      >
        {config.name}
      </div>
      {children}
    </div>
  )
}
