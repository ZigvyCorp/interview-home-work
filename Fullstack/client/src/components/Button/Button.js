import React, { memo } from "react";

const Button = ({ name, handleOnclick, className, iconBefore, iconAfter, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleOnclick}
      className={
        className
          ? className
          : `${disabled && "bg-gray-500 cursor-not-allowed"} bg-red-500 text-hover p-2 w-full rounded-md mt-5 flex items-center justify-center `
      }
    >

      {iconBefore && <span className="mr-2">{iconBefore}</span>}
      <span>{name}</span>
      {iconAfter && <span className="ml-2">{{ iconAfter }}</span>}


    </button>
  );
};

export default memo(Button);
