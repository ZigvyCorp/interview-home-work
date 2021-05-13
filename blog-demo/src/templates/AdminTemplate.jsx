import React from "react";
import { Route } from "react-router";

const AdminTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};

export default AdminTemplate;
