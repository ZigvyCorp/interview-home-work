// AppContext.js
import { useMediaQuery } from "react-responsive";
import { theme } from "../styled/theme/globalTheme";

export const useResponsiveBreakpoints = () => {
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.isMobile.maxWidth });
  const isTablet = useMediaQuery({
    minWidth: theme.breakpoints.isTablet.minWidth,
    maxWidth: theme.breakpoints.isTablet.maxWidth,
  });
  const isDesktop = useMediaQuery({ minWidth: theme.breakpoints.isDesktop.minWidth });
  return { isMobile, isTablet, isDesktop };
};
