import Blog from "./views/blog";
import Login from "./views/login";

const routes = [
  { path: "/login", exact: true, component: Login},
  { path: "/", exact: true, name: "Blogs" },
  { path: "/blog", name: "Blogs", component: Blog },
  
];

export default routes;

