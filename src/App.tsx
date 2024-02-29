import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IRoute, PUBLIC_ROUTE } from "./routes";
import { PageNotFound } from "./pages";
import { ROUTES_PATH } from "./common/enum/routes.enum";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {PUBLIC_ROUTE.map((route: IRoute) => {
          const Layout = route.layout ?? React.Fragment;
          const Page = route.page;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path={ROUTES_PATH.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
