import React from "react";

const Input = ({ type, name, placeholder, onChange }) => (
  <div className="my-3">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        const inputValue = e.target.value;
        onChange(inputValue);
      }}
    ></input>
  </div>
);

export default Input;
