import config from "../config";
import Home from "../pages/Home/home";
import User from "../pages/User/user";
import PostDetail from "../pages/post/postDetail";

const routes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: User },
  { path: config.routes.postDetail, component: PostDetail },
];

export { routes };
