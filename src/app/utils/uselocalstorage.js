import {useState, useEffect} from "react"

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null && typeof storedValue !== 'string' ? JSON.parse(storedValue) : storedValue;
      } catch (error) {
        console.error('Error retrieving data from localStorage:', error);
        return initialValue;
      }
    });
  
    useEffect(() => {
      try {
        if (typeof value !== 'string') {
          localStorage.setItem(key, JSON.stringify(value));
        } else {
          localStorage.setItem(key, value);
        }
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    }, [key, value]);
  
    return [value, setValue];
  };
  
export default useLocalStorage;