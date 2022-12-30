
export const useLocalStorage = () => {
    const removeFromLocalStorage = (key) => {
        if (window != undefined) {
            localStorage.removeItem(key)
        }
    }

    const setLocalStorage = (key, value) => {
        
        

        if (window != undefined) {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }

    const getItem = (key) => {
        return localStorage.getItem(key)
    }

    return {removeFromLocalStorage, setLocalStorage, getItem}
}
