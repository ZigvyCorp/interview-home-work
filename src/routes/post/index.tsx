import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "src/shared/components/header";
import PostDetails from "./post";
import { compose } from "recompose";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  translate: any;
  match: any;
}

const Styled = styled.div`
  .post-item {
    margin-top: 5%;
  }
`;

const Post = (props: IProps) => {
  const id = props.match.params.id;
  const { helmet } = props.translate.post;
  return (
    <Styled className="post">
      <Helmet title={`${helmet}`} />
      <Header />
      <PostDetails id={id} details showComments />
    </Styled>
  );
};

export default compose<any, any>(withRouter, withTranslate)(Post);
