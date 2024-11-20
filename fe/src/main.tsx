import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Providers } from "./config/Provider";
import Login from "./pages/Login";
import { Authentication } from "./config/Authentication";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authentication>
        <Home />
      </Authentication>
    ),
  },
  {
    path: "/login",
    element: (
      <Authentication>
        <Login />
      </Authentication>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routers} />
    </Providers>
  </React.StrictMode>
);
