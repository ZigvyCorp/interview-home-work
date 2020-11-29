import React from "react";

const AuhtenticationFormContainer = (WrappedComponent) => {
  return (props) => (
    <div className="userAuthenticationPage fluid-container d-flex justify-content-center align-items-center">
      <WrappedComponent {...props} />
    </div>
  );
};

export default AuhtenticationFormContainer;
