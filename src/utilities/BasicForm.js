import React from "react";

const BasicForm = ({ title, subtitle, children, onSubmit }) => (
  <form className="bg-white p-5 text-center basicForm" onSubmit={onSubmit}>
    <p className="h1 my-3">{title}</p>
    <p className="h3 my-3 text-uppercase">{subtitle}</p>
    {children}
  </form>
);

export default BasicForm;
