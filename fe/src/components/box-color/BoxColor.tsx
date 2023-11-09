import React from "react";

import "./style.scss";

interface Props {
  text: string;
}

const BoxColor = (props: Props) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate a random background color
  const randomBackgroundColor = getRandomColor();

  const boxStyle = {
    backgroundColor: randomBackgroundColor,
  };

  return (
    <span className="box-color" style={boxStyle}>
      {props.text}
    </span>
  );
};

export default BoxColor;
