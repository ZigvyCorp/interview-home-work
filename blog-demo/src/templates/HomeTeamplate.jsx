import React from "react";
import { Route } from "react-router";
import Navbar from "../components/Navbar";

const HomeTeamplate = (props) => {
  let { Component, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute) => {
        return (
          <>
            <Navbar />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};

export default HomeTeamplate;
