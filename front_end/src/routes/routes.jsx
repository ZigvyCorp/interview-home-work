import config from "~/config";
import BlogDetail from "~/pages/blog/blogDetail/BlogDetail";
import BlogList from "~/pages/blog/blogList/BlogList";

const publicRoutes = [
  { path: "", component: BlogList },
  { path: config.routes.blog, component: BlogList },
  { path: config.routes.blogDetail, component: BlogDetail },
  
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
