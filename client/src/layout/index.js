import React from "react";
import HeaderWarpper from "./Header";
import styled from "styled-components";

const MainContainer = styled.main`
  min-height: 100vh;
  margin: 0 auto;
`;

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <HeaderWarpper />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

export default DefaultLayout;
