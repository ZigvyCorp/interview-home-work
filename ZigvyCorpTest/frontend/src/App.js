import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = null;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}

            {privateRoutes.map((route, index) => {
              let Layout = null;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route key={index} element={<RouteConfirmation />}>
                  <Route
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                </Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
