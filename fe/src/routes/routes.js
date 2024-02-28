import config from "../config";
import Home from "../pages/Home/home";
import User from "../pages/User/user";

const routes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: User },
];

export { routes };
