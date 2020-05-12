import React from "react";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostActionPage from "./pages/PostActionPage/PostActionPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  },
  {
    path: "/post/add",
    exact: false,
    main: () => <PostActionPage />
  },
  {
    path: "/post/:id/edit",
    exact: false,
    main: ({ match }) => <PostActionPage match={match} />
  }
];

export default routes;
