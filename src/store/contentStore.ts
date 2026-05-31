const PREFIX = 'tf_content.'

export const getContent = (key: string, defaultValue: string): string => {
  try { return localStorage.getItem(PREFIX + key) ?? defaultValue } catch { return defaultValue }
}

export const setContent = (key: string, value: string): void => {
  try { localStorage.setItem(PREFIX + key, value) } catch {}
}

export const getAllOverrides = (): Record<string, string> => {
  const result: Record<string, string> = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k?.startsWith(PREFIX)) result[k.slice(PREFIX.length)] = localStorage.getItem(k) ?? ''
    }
  } catch {}
  return result
}

export const resetAllContent = (): void => {
  try {
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k?.startsWith(PREFIX)) keys.push(k)
    }
    keys.forEach(k => localStorage.removeItem(k))
  } catch {}
}

// Pub/sub para notificar cambios a los hooks suscritos
type Listener = () => void
const listeners = new Set<Listener>()
export const subscribeContent = (fn: Listener) => { listeners.add(fn); return () => listeners.delete(fn) }
export const notifyContent = () => listeners.forEach(l => l())
