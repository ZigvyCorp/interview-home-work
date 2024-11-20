import React from "react";
import Header from "../components/Header";

const HomeTemplate = (Component) => ({ ...props }) => (
    <>
        <Header />
        <Component {...props} />
    </>
);

export default HomeTemplate;