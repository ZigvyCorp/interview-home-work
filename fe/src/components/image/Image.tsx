import React from "react";

interface Props {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}

const Image = (props: Props) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    ></img>
  );
};

export default Image;
