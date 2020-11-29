import React from "react";
import UpperNavBar from "../../utilities/bars/upperNavbar";

const PageWithNavBar = (WrappedComponent) => {
  return (props) => (
    <div className="container-fluid">
      <UpperNavBar />
      <WrappedComponent {...props} />
    </div>
  );
};

export default PageWithNavBar;
