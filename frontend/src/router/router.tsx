import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config";

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((routeItem) => (
          <Route
            key={routeItem.component}
            path={routeItem.path}
            element={<LazyComponentLoader component={routeItem.component} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

const LazyComponentLoader = ({ component }: { component: string }) => {
  const LazyComponent = lazy(() => import(`../pages/${component}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
