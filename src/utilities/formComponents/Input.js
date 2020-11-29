import React from "react";

const Input = ({
  inline,
  type = "text",
  id,
  name,
  placeholder,
  onChange,
  onKeypressed,
  className,
}) => (
  <div className={`my-3 ${inline ? "d-inline" : ""} w-100`}>
    <input
      id={id}
      className={`${className} w-100`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={
        onChange
          ? (e) => {
              const inputValue = e.target.value;
              onChange(inputValue);
            }
          : null
      }
      onKeyPress={onKeypressed || null}
    ></input>
  </div>
);

export default Input;
