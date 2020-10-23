import React from "react";
import { Route, Switch } from "react-router-dom";

const NewsFeed = React.lazy(() => import("./Newsfeed"));
const Create = React.lazy(() => import("./Create"));
const Edit = React.lazy(() => import("./Edit"));
const Details = React.lazy(() => import("./Details"));

const Blogs: React.FC = () => {
  return (
    <Switch>
      <Route path="/blogs/new" exact component={Create} />
      <Route path="/blogs/:id/edit" exact component={Edit} />
      <Route path="/blogs/:id" component={Details} />
      <Route path="/" component={NewsFeed} />
    </Switch>
  );
};

export default Blogs;
