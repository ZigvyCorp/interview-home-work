import { useEffect, useState } from 'react';
interface windowSizeProps {
   width: number;
   height: number;
}

const useBreakpoint = (breakpoints: {}[]) => {
   const [breakpoint, setBreakPoint] = useState<number>(0);
   const [windowSize, setWindowSize] = useState<windowSizeProps>({
      width: 0,
      height: 0,
   });

   const handleResize = () => {
      setWindowSize({
         width: window.innerWidth,
         height: window.innerHeight,
      });
   };

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
      //@ts-ignore
      setBreakPoint(CheckingBreakpoint(windowSize, breakpoints));

      return () => window.removeEventListener('resize', handleResize);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [windowSize.width]);
   return breakpoint;
};

function CheckingBreakpoint(
   windowSize: { width: number; height: number },
   breakpoints: Array<Object>,
) {
   const _breakpoints = [
      { xs: 500 },
      { sm: 640 },
      { md: 768 },
      { lg: 1024 },
      { xl: 1280 },
      { '2xl': 1536 },
   ];
   for (let i = breakpoints.length - 1; i >= 0; i--) {
      //@ts-ignore

      const width = _breakpoints[i][Object.keys(breakpoints[i])[0]];
      if (windowSize.width > width)
         return Object.values(breakpoints[i])[0] as number;
   }
   return 1;
}
export default useBreakpoint;
