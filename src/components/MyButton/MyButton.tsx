import React, { HTMLAttributes } from "react";

interface IMyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const MyButton = (props: IMyButtonProps) => {
  return <button {...props}>MyButton</button>;
};

export default MyButton;
