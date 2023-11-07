import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound/NotFound";
const publicRoutes = [
  { path: "/", component: Home, layout: null },
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
