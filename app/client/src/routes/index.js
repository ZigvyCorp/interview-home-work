import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import PostDetailPage, { postLoader } from "../pages/PostDetailPage";
import Homepage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "posts/:postId",
        loader: postLoader,
        element: <PostDetailPage />,
      },
    ],
  },
]);
