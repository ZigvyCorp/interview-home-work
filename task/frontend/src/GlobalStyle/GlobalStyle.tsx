import React, { Fragment } from "react";
import "./GlobalStyle.css";
type GlobalStyleProps = {
  children: React.ReactNode;
};
const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {
  return <Fragment>{children}</Fragment>;
};

export default GlobalStyle;
