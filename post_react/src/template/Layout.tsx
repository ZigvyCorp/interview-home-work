import React, { Fragment } from "react";
import { Header } from "../components/Header/Header";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
