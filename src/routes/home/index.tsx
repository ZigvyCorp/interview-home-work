import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import Helmet from "react-helmet";
import Header from "src/shared/components/header";
import Posts from "./home.posts";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.home {
  }
`;

const Home = (props: IProps) => {
  const { helmet, title } = props.translate.home;
  return (
    <Styled className="home">
      <Helmet title={helmet} />
      <Header />
      <h2 className="title">{title}</h2>
      <Posts />
    </Styled>
  );
};

export default withTranslate(Home);
