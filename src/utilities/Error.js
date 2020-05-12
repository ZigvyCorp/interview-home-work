import React from "react";

const Error = ({ title, subtitle, children, onSubmit }) => (
  <div className="text-danger">{children}</div>
);

export default Error;
