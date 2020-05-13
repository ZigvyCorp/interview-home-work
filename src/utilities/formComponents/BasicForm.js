import React from "react";

const BasicForm = ({ title, subtitle, children, onSubmit, className }) => (
  <form
    className={`${className} bg-white p-5 text-center basicForm`}
    onSubmit={onSubmit}
  >
    {title && <p className="h1 my-3">{title}</p>}
    {subtitle && <p className="h3 my-3 text-uppercase">{subtitle}</p>}
    {children}
  </form>
);

export default BasicForm;
