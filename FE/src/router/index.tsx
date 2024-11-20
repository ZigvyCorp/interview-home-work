import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const PostDetail = lazy(() => import("../pages/PostDetail"));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
      },
    ],
  },
]);

export { router };
