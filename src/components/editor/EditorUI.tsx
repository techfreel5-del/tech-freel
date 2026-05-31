import { useState, useEffect } from 'react'
import { useEditor } from '@/context/EditorContext'
import { getContent } from '@/store/contentStore'

/* ── Floating toolbar ─────────────────────────────────────── */
export function EditorToolbar() {
  const { editMode, toggleEditMode, exportContent, resetContent } = useEditor()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: editMode ? '#6366f1' : 'rgba(20,20,30,0.92)',
        color: '#fff',
        borderRadius: 999,
        padding: '8px 16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(12px)',
        transition: 'background 0.2s',
        fontSize: 13,
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 600,
        userSelect: 'none',
      }}
    >
      {/* Dot indicator */}
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: editMode ? '#a5f3fc' : '#6366f1', flexShrink: 0, boxShadow: editMode ? '0 0 6px #a5f3fc' : 'none' }} />

      <button
        onClick={toggleEditMode}
        style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer', padding: 0, letterSpacing: '0.02em' }}
      >
        {editMode ? 'Salir del editor' : 'Modo editor'}
      </button>

      {editMode && (
        <>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.3)' }} />
          <button
            onClick={exportContent}
            title="Descargar cambios como JSON"
            style={{ background: 'none', border: 'none', color: '#a5f3fc', fontSize: 13, cursor: 'pointer', padding: 0, fontWeight: 600 }}
          >
            Exportar
          </button>
          <button
            onClick={resetContent}
            title="Resetear todo el contenido"
            style={{ background: 'none', border: 'none', color: '#fca5a5', fontSize: 13, cursor: 'pointer', padding: 0, fontWeight: 600 }}
          >
            Resetear
          </button>
        </>
      )}
    </div>
  )
}

/* ── Side edit panel ─────────────────────────────────────── */
export function EditorPanel() {
  const { editMode, activeSectionConfig, activeSectionId, closeSection, setField } = useEditor()
  const isOpen = editMode && !!activeSectionConfig

  // Local state for current field values (so inputs are controlled)
  const [localValues, setLocalValues] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!activeSectionConfig || !activeSectionId) return
    const initial: Record<string, string> = {}
    activeSectionConfig.fields.forEach(f => {
      initial[f.key] = getContent(`${activeSectionId}.${f.key}`, f.defaultValue)
    })
    setLocalValues(initial)
  }, [activeSectionId, activeSectionConfig])

  const handleChange = (key: string, value: string) => {
    setLocalValues(prev => ({ ...prev, [key]: value }))
    setField(`${activeSectionId}.${key}`, value)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 320,
        zIndex: 99998,
        background: 'rgba(14,14,22,0.97)',
        color: '#fff',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ padding: '1rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, color: '#6366f1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>Editando sección</div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{activeSectionConfig?.name}</div>
        </div>
        <button
          onClick={closeSection}
          style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: 20, cursor: 'pointer', lineHeight: 1, padding: 4 }}
          aria-label="Cerrar panel"
        >
          ×
        </button>
      </div>

      {/* Fields */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {activeSectionConfig?.fields.length === 0 && (
          <p style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', marginTop: 40 }}>
            Esta sección no tiene campos editables de texto.<br /><br />
            Para cambiar imágenes o logos, indícalo en el chat.
          </p>
        )}
        {activeSectionConfig?.fields.map(field => (
          <div key={field.key}>
            <label style={{ display: 'block', fontSize: 11, color: '#9ca3af', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                value={localValues[field.key] ?? field.defaultValue}
                onChange={e => handleChange(field.key, e.target.value)}
                rows={3}
                style={inputStyle}
              />
            ) : field.type === 'image' ? (
              <div>
                <input
                  value={localValues[field.key] ?? field.defaultValue}
                  onChange={e => handleChange(field.key, e.target.value)}
                  placeholder="Ruta de imagen, ej: /assets/imgs/..."
                  style={inputStyle}
                />
                {(localValues[field.key] || field.defaultValue) && (
                  <img
                    src={localValues[field.key] ?? field.defaultValue}
                    alt="preview"
                    style={{ marginTop: 6, width: '100%', height: 80, objectFit: 'cover', borderRadius: 6, opacity: 0.8 }}
                  />
                )}
              </div>
            ) : (
              <input
                value={localValues[field.key] ?? field.defaultValue}
                onChange={e => handleChange(field.key, e.target.value)}
                style={inputStyle}
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: '1rem 1.2rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 11, color: '#4b5563', lineHeight: 1.5 }}>
        Los cambios se aplican en tiempo real y se guardan en el navegador.<br />
        Usa <strong style={{ color: '#6366f1' }}>Exportar</strong> para guardarlos y enviarlos al desarrollador.
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 6,
  color: '#fff',
  fontSize: 13,
  padding: '8px 10px',
  resize: 'vertical' as const,
  outline: 'none',
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.5,
  boxSizing: 'border-box',
}
