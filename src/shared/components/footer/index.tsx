import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  translate: any;
}

const Styled = styled.div``;

const Footer = (props: IProps) => {
  return <Styled className="footer"></Styled>;
};

export default withTranslate(Footer);
