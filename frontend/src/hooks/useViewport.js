import { useState, useEffect } from 'react';

export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth(width);
    };
    handleWindowWidth();
    window.addEventListener('resize', handleWindowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);
  return [windowWidth];
};
