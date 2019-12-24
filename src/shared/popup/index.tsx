import React from "react";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "./popup.actions";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { getPopupFactories } from "src/externals/popup";
import { breakpoints } from "../utils/styled";

interface IProps {
  popup: any;
  location: any;
  togglePopup: (payload: any) => { type: string; payload: any };
}

const Popup = (props: IProps) => {
  const { popup, location, togglePopup } = props;
  const [loaded, setLoaded] = React.useState(false);
  const [Comp, setComp]: any = React.useState(<></>);
  const factories: any = getPopupFactories();
  React.useEffect(() => {
    if (popup.toggle) {
      togglePopup({
        toggle: false
      });
    }
  }, [location.pathname]);
  React.useEffect(() => {
    if (popup.toggle && popup.data.comp) {
      (
        factories[popup.data.comp] ||
        function() {
          return Promise.reject({
            message: "Component not found"
          });
        }
      )()
        .then((res: any) => {
          setComp(res);
          setLoaded(true);
        })
        .catch((e: any) => {
          console.log(e);
          setLoaded(false);
        });
    }
  }, [popup.toggle]);
  return popup.toggle ? (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(12, 11, 11,0.95)",
        zIndex: 1000,
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }}
    >
      {loaded ? <Comp.default /> : "something wrong!"}
    </div>
  ) : null;
};

export default compose<IProps, any>(
  withRouter,
  connect(
    (state: any) => ({
      popup: state.popup
    }),
    {
      togglePopup
    }
  )
)(Popup);
