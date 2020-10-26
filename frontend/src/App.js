import React from "react";
import './App.css';
import Loading from "./components/shared/loading/loading";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import Blogs from "./components/pages/blogs/blogs"
import BlogDetail from "./components/pages/blog-detail/blog-detail";
import RouteLayout from "./components/shared/route-layout/route-layout";
import customHistory from "./core/utils/history";

export const routes = [
  {
    href: "/",
    exact: true,
    title: "Blogs",
    component: Blogs,
  },
  {
    href: "/blog/:id",
    exact: true,
    title: "Reset Password",
    component: BlogDetail,
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router history={customHistory}>
          <Switch>
            {routes.map(({ href, exact, component }) => (
              <RouteLayout
                key={href}
                path={href}
                exact={exact}
                component={component}
              />
            ))}
          </Switch>
        </Router>
      </BrowserRouter>
      <Loading/>
    </div>
  );
}

export default App;
