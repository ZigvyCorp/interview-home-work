import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Spin } from "antd";
import "./App.css";
import history from './components/History';

const Posts = lazy(() => import("./containers/posts"));
const Post = lazy(() => import("./containers/post"));


function App() {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div className="loading-component">
            <Spin size="large" tip="Loading..." />
          </div>
        }
      >
        <Router history={history}>
          <Switch>
            <Redirect exact from="/" to="/posts" />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/post/:id" component={Post} />
            <Route path="/" component={Posts} />
          </Switch>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;

