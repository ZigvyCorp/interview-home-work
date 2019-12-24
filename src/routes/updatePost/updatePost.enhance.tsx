import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import withPost from "src/routes/post/post.enhance";

interface IProps {
  match: any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { id } = props.match.params;
  return <WrappedComponent {...{ ...props, id }} />;
};

export default compose<any, any>(
  withRouter,
  connect(state => ({}), {}),
  enhance,
  withPost
);
