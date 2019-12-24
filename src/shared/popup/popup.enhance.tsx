import React from "react";
import { actionTogglePopup as togglePopup } from "./popup.actions";
import { connect } from "react-redux";
import { compose } from "recompose";
import { IReducer } from "./popup.reducer";

export interface IProps {
  popup: IReducer;
  togglePopup: (payload: object) => void;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      popup: state.popup
    }),
    {
      togglePopup
    }
  ),
  enhance
);
