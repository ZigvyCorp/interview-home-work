import React, { lazy } from "react";
// import NotFoundPage from "./pages/404/components/App";

import GlobalLayOut from "./common/GlobalLayout";

const HomePage = lazy(() => import("./pages/home"));
const MapPage = lazy(() => import("./pages/map"));

const route = [
  {
    path: "/",
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <HomePage router={props} />
  },
  {
    path: "/map",
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <MapPage router={props} />
  }
];

export default route;
