import {
  useEffect,
  EffectCallback,
  DependencyList,
  useState,
  useRef,
} from 'react';

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

export function useDebounceWatch<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

export function useDebounceEffect(
  effect: EffectCallback,
  delay: number,
  dependencies: DependencyList
): void {
  useEffect(() => {
    const timer = setTimeout(() => {
      effect();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, dependencies);
}
