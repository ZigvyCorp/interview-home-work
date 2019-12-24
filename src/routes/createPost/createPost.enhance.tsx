import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

interface IProps {}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  connect(state => ({}), {}),
  enhance
);
