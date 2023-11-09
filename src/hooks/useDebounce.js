import { useState, useEffect } from 'react';

function useDebounce(value, duration = 500) {
    // State to manage the debounced value
    const [debounceValue, setDebounceValue] = useState(value);

    // Effect to update the debounced value after the specified duration
    useEffect(() => {
        const timer = setTimeout(() => {
            // Set a timer to update the debounced value
            setDebounceValue(value);
        }, duration);

        // Cleanup function to clear the timer on component unmount or when the value changes
        return () => {
            clearTimeout(timer);
        };
    }, [value, duration]);

    return debounceValue;
}

export default useDebounce;
