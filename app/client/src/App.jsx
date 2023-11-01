import React from "react";
import AppHeader from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <AppHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
