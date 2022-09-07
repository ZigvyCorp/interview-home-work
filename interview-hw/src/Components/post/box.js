import React from "react";

const Box = ({ text, bgColor, color }) => {
  return (
    <div
      style={{
        color: color ? color : text,
        border: `1px solid ${color ? color : text}`,
        backgroundColor: bgColor,
      }}
      className={`boxText px-2 pb-1 rounded mx-1 mb-2`}
    >
      {text}
    </div>
  );
};

export default Box;
