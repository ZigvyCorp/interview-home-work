import React from "react";

const Error = ({ children, className }) => (
  <div className={`text-danger ${className} text-center`}>{children}</div>
);

export default Error;
