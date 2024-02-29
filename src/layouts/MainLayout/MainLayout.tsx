import React, { PropsWithChildren } from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
