import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute, allRoutes } from './routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>{[...allRoutes()].map((route) => BuildRoute(route))}</Routes>
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
