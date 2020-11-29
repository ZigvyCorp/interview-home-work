import React, { Component } from "react";
import Home from "./pages/home/Home";
import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import CreatePost from "./pages/post/CreatePost";
import Post from "./pages/post/Post";

const App = ({ username }) => {
  const AuthorizationDependantComponent = (Component, mustAuthorize) => {
    if (mustAuthorize) {
      return !username ? <Redirect to="/login" /> : <Component />;
    }
    return username ? <Redirect to="/home" /> : <Component />;
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path="/(|home)" exact>
          <Home />
        </Route>
        <Route path="/create-post">
          {AuthorizationDependantComponent(CreatePost, true)}
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/login">
          {AuthorizationDependantComponent(LogIn, false)}
        </Route>
        <Route path="/signup">
          {AuthorizationDependantComponent(SignUp, false)}
        </Route>
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = ({ user }) => {
  const username = _.get(user, "response.data.username");
  return {
    username,
  };
};

export default connect(mapStateToProps)(App);
