/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

type IntersectionObserverHookParam = {
    hasNextPage: boolean;
    onChange: (value: any) => void;
};

const useIntersectionObserver = (param: IntersectionObserverHookParam) => {
    const { hasNextPage, onChange } = param;
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const observer = useRef(
        new IntersectionObserver(
            (entities) => {
                const first = entities[0];
                if (first.isIntersecting) {
                    onChange((prev: any) => prev + 1);
                }
            },
            {
                threshold: 1,
            },
        ),
    );

    useEffect(() => {
        if (!element) return;

        const currentObserver = observer.current;
        currentObserver.observe(element);

        if (!hasNextPage) currentObserver.unobserve(element);

        return () => {
            currentObserver.unobserve(element);
        };
    }, [element, hasNextPage]);

    return { setElement };
};

export default useIntersectionObserver;
