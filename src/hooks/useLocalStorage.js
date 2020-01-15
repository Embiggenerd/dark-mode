import { useState } from "react";
// We are 

export const useLocalStorage = (key, initialValue) => {

    // This hooks into our hook's state so that we have to get 
    // an item out of ls in order to hydrate our state
    const [storedValue, setStoredValue] = useState(() => { 
        const item = window.localStorage.getItem(key); // the hook
        return item ? JSON.parse(item) : initialValue; // if get works, parse and return, else set echo initialValue arg
    });

    // Our state mirrors local storage. This writes to ls no matter what.
    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    
    return {storedValue, setValue};
};