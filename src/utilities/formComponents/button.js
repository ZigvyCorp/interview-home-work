import React from "react";

const Button = ({ children, className, type, onClick, center = true }) => (
  <div className={`${center ? "text-center" : ""}`}>
    <button type={type} className={className} onClick={onClick || null}>
      {children}
    </button>
  </div>
);

export default Button;
