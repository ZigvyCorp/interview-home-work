import React from "react";
import { BrowserRouter } from "react-router-dom";

import { LayoutContainer } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer />
    </BrowserRouter>
  );
}

export default App;
