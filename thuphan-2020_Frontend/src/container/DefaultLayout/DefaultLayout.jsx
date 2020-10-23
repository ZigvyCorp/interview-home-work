import React, { Component, Fragment } from "react";
import Header from "./header";
import routes from "./../../routes";
import { Switch, Route } from "react-router-dom";

class DefaultLayout extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      exact={route.exact}
                      path={route.path}
                      name={route.name}
                      component={route.component}
                    />
                  ) : null;
                })}
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DefaultLayout;
