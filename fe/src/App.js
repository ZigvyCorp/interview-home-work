import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import defaultLayout from "./layouts/defaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout = defaultLayout;

          if (route.Layout) {
            Layout = route.Layout;
          } else if (route.Layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
