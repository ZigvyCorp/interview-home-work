import React from "react";
import styled from "styled-components";
import { getEnvs } from "src/shared/utils";

interface IProps {}

const Styled = styled.div`
  @keyframes loadingAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  &.loading {
    position: relative;
    width: 100vw;
    height: 100vh;
    .logo {
      width: 25%;
    }
    ::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #0c0c0c;
      animation: loadingAnimation 3s infinite;
      content: "";
    }
  }
`;

const Loading = (props: IProps) => {
  return (
    <Styled className="loading">
      <div className="logo abs-center">
        <img src={`${getEnvs().SOURCE_DOMAIN}/images/icons/loading-zigvy.svg`} alt="" />
      </div>
    </Styled>
  );
};

export default Loading;
