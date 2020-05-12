import React from "react";

const SubmitButton = ({ children }) => (
  <button type="submit" className="p-1 w-100 text-uppercase my-3">
    {children}
  </button>
);

export default SubmitButton;
