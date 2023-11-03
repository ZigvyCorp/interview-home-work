import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const UserTemplate = () => {
  return <Fragment>
    <Header/>
    <Outlet/>
  </Fragment>;
};

export default UserTemplate;
