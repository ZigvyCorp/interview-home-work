import React from "react";
import styled from "styled-components";
import { breakpoints } from "src/shared/utils/styled";

interface IProps {}

const Styled = styled.div`
  &.sign-in {
    margin: 0 auto;
    min-width: ${breakpoints.xs};
    max-width: ${breakpoints.sm};
    min-height: 100vh;
    border: solid 2px #fff;
    background: #2b2b2b;
  }
`;

const SignIn = (props: IProps) => {
  return <Styled className="sign-in">
  </Styled>;
};

export default SignIn;
