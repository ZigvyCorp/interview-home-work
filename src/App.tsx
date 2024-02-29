import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IRoute, PUBLIC_ROUTE } from "./routes";
import { PageNotFound } from "./pages";
import MainLayout from "./layouts/MainLayout/MainLayout";
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
        <Route
          path="*"
          element={
            <MainLayout>
              <PageNotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
