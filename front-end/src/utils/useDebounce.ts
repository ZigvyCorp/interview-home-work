import { useEffect, useRef } from 'react';

export const useDebounce = (func: (...args: any) => void, waitFor = 300) => {
  const timer = useRef<any>(null);
  const savedFunc = useRef(func);

  useEffect(() => {
    savedFunc.current = func;
  }, [waitFor, func]);

  return (...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    timer.current = setTimeout(() => savedFunc.current?.(...args), waitFor);
  };
};
