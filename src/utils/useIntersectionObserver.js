import { useState, useCallback, useEffect } from 'react';

const useIntersectionObserver = (refElement) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = useCallback((entities) => {
    const target = entities[0];
    setIsVisible(target.isIntersecting);
  }, []);

  const element = refElement.current;

  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(handleObserver);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element, handleObserver]);

  return isVisible;
};

export default useIntersectionObserver;
