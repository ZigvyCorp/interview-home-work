import React from "react";
import { Route } from "react-router-dom";
import Layout from "../layout/layout"

const RouteLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props}></Component>
          </Layout>
        );
      }}
    />
  );
};

export default RouteLayout;
