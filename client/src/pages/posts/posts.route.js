import ListPostPage from "./pages/List";
import DetailPostPage from "./pages/Detail";

const PostRoutes = [
  {
    path: "/",
    element: <ListPostPage />,
  },
  {
    path: "/posts/:id",
    element: <DetailPostPage />,
  },
];

export default PostRoutes;
