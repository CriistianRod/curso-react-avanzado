import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(error)
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage]
}
