import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "src/auth/auth.selector";

interface IProps {
  component: any;
  exact: boolean;
  path: string;
}
const PrivateRoute = (props: IProps) => {
  const { component: Component, ...rest } = props;
  const { isAuthen } = useSelector(authSelector);
  return (
    <Route {...rest}>
      {isAuthen ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
