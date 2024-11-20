import DetailPage from "../pages/detail";
import HomePage from "../pages/home";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
    layout: true,
  },
  {
    path: "/blog/:id",
    component: DetailPage,
    layout: true,
  },
];

export { publicRoutes };
