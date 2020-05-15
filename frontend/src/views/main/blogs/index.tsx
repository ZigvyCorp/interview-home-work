import React from "react";
import { Route, Switch } from "react-router-dom";

const NewsFeed = React.lazy(() => import("./newsfeed"));
const Create = React.lazy(() => import("./create"));

const Blogs: React.FC = () => {
  return (
    <Switch>
      <Route path="/blogs/new" component={Create} />
      <Route path="/" component={NewsFeed} />
    </Switch>
  );
};

export default Blogs;
