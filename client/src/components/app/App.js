import Global from "components/global";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "routes";

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <div className="App">
      <Global>
        <RouterProvider router={router} />
      </Global>
    </div>
  );
}

export default App;
