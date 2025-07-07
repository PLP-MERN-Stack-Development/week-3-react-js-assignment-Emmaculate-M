import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [Value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Value))
  }, [key, Value])

  return [Value, setValue]
}
