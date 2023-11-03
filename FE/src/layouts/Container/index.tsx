import { ReactNode } from "react";
import { theme } from "../../styled/theme/globalTheme";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${theme.breakpoints.isMobile.minWidth}) {
    max-width: ${theme.breakpoints.isMobile.maxWidth};
  }

  @media (min-width: ${theme.breakpoints.isTablet.minWidth}) {
    max-width: ${theme.breakpoints.isTablet.maxWidth};
  }

  @media (min-width: ${theme.breakpoints.isDesktop.minWidth}) {
    max-width: ${theme.breakpoints.isDesktop.maxWidth};
  }
`;

const Container = ({ children, style, ...props }: { children: ReactNode; style?: React.CSSProperties }) => {
  return (
    <ContainerWrapper style={style} {...props}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
