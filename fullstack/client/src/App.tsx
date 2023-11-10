import { Routes, Route } from "react-router-dom";
import pageRouter from "./router";
import { PageLayout } from "./components";

function App() {
  return (
    <>
      <Routes>
        {pageRouter.map((route, index) => {
          let Layout = PageLayout;
          const Page = route.page;
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
      </Routes>
    </>
  );
}

export default App;
