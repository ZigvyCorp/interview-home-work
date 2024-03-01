import DefaultLayout from "layout";
import PostRoutes from "pages/posts/posts.route";

const AppRoutes = [...PostRoutes]?.map((route) => {
  const Layout = route.layout ?? DefaultLayout;
  route.element = <Layout>{route.element}</Layout>;
  return route;
});

export default AppRoutes;
