import React from "react";
import Navbar from "../navbar/navbar"

const Layout = (props) => {
    const { children } = props;

    return (
        <div className="main-page">
            <Navbar/>
            <div style={{ marginTop: "115px" }}>
                {children}
            </div>
        </div>
    )
}

export default Layout