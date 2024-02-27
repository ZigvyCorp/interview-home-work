import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes/Routes";
import { Fragment } from "react";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let LayoutTag;

          if (route.layout) {
            LayoutTag = Layout;
          } else {
            LayoutTag = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <LayoutTag>
                  <Page />
                </LayoutTag>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
