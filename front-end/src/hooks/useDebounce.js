import { useEffect, useState } from "react";

const useDebounce = (changedValue, delayTime) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(changedValue);

  useEffect(() => {
    // Set a timeout to update the debounced value after delay time
    const timeoutId = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);

    // Clear the timeout if changed value changes before delayTime
    return () => clearTimeout(timeoutId);
  }, [changedValue, delayTime]);

  return debouncedValue;
};

export default useDebounce;
