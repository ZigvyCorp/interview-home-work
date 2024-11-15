import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostDetailPage from "../pages/PostDetailPage";
import SignupPage from "../pages/SignupPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/post/:postId",
    component: PostDetailPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
];
export default routes;
