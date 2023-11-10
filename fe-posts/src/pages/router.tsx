import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute, allAppRoutes } from '.';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>{[...allAppRoutes()].map((route) => BuildRoute(route))}</Routes>
    </BrowserRouter>
  );
}

const BuildRoute = (route: IRoute) => {
  return (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children?.map((child) => BuildRoute(child))}
    </Route>
  );
};
