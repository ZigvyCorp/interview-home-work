import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { translateSelector } from "src/shared/selectors";

interface IProps {
  translate: any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  return <WrappedComponent {...props} />;
};

export default compose<any, any>(
  connect(
    (state: any) => ({
      i18n: state.i18n,
      translate: translateSelector(state)
    }),
    {}
  ),
  enhance
);
