import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {
    const { storedValue, setValue } = useLocalStorage("dark_mode", false)
    
    useEffect(() => {
        if (storedValue) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }

    }, [storedValue])

    return [storedValue, setValue]
}