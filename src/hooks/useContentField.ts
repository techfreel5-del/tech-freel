import { useState, useEffect } from 'react'
import { getContent, subscribeContent } from '@/store/contentStore'

export function useContentField(key: string, defaultValue: string): string {
  const [value, setValue] = useState(() => getContent(key, defaultValue))
  useEffect(() => {
    const unsub = subscribeContent(() => setValue(getContent(key, defaultValue)))
    return unsub
  }, [key, defaultValue])
  return value
}
