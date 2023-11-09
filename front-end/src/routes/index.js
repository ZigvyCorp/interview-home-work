import Blogs from "../screens/Blogs/blogs"
import DetailBlog from "../screens/DetailBlog/detailBlog"

const routes = [
  {
    path: "/",
    element: ""
  },
  {
    path: "/posts",
    element: <Blogs />
  },
  {
    path: "/user",
    element: ""
  },
  {
    path: "/posts/:id",
    element: <DetailBlog />
  }
]

export default routes
