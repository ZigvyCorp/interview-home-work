import debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef } from 'react';

import { useIsMounted } from './useIsMounted';

export const useDebounceCallback = <T extends (...arg: any[]) => any = any>(
    cb: T,
    delay: number, // ms
) => {
    const inputsRef = useRef({ cb, delay });
    const isMounted = useIsMounted();
    useEffect(() => {
        inputsRef.current = { cb, delay };
    }, [cb, delay]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback(
        debounce((...args) => {
            if (inputsRef.current.delay === delay && isMounted()) {
                inputsRef.current.cb(...args);
            }
        }, delay),
        [delay, debounce],
    );
};
