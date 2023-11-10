import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../page/Error404";
import Home from "../page/Home";
import Login from "../page/Login";
import ProtectedRouter from "./ProtectedRoute";

const AuthLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRouter />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
        ],
      },
    ],
  },
]);
