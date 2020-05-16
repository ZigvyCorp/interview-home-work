import React from "react";
import { Route, Switch } from "react-router-dom";

const NewsFeed = React.lazy(() => import("./newsfeed"));
const Create = React.lazy(() => import("./create"));
const Edit = React.lazy(() => import("./edit"));

const Blogs: React.FC = () => {
  return (
    <Switch>
      <Route path="/blogs/new" exact component={Create} />
      <Route path="/blogs/:id/edit" component={Edit} />
      <Route path="/" component={NewsFeed} />
    </Switch>
  );
};

export default Blogs;
