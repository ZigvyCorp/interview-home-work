import React, { Component, Suspense } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import routes from "./route";

import { Spin } from "antd";
import { BlankLayout } from "./common/BlankLayout";
import { ACCESS_TOKEN } from "./constant/constants";
import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const WaitingComponent = (Layout, Component) => props => (
  <Layout>
    <Suspense fallback={<Spin tip="Loading..." />}>
      <Component {...props} />
    </Suspense>
  </Layout>
);

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default class App extends Component {
  showContent = () => {
    let result = [];
    const isLogin = localStorage.getItem(ACCESS_TOKEN);

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const layout = route.layout || BlankLayout;

        if (route.auth && !isLogin) {
          return (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={WaitingComponent(layout, route.main)}
              isLogin={isLogin}
            />
          );
        }

        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={WaitingComponent(layout, route.main)}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <div className="App">{this.showContent()}</div>
      </Router>
    );
  }
}
