import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getEnvs } from "src/shared/utils";

interface IProps {}

const Styled = styled.div``;

const Logo = (props: IProps) => {
  return (
    <Link to="/" className="logo">
      <img
        src={`${getEnvs().SOURCE_DOMAIN}/images/icons/zigvy-logo.svg`}
        alt=""
      />
    </Link>
  );
};

export default Logo;
