import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (bool) => {
    const { storedValue, setValue } = useLocalStorage("dark_mode", false)
    setValue(bool)
    return storedValue
}