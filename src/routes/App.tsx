import React from "react";
import { Styled } from "./App.styled";
import { compose, branch, renderComponent } from "recompose";
import { Switch, Route } from "react-router-dom";
import Popup from "src/shared/popup";
import Home from "./home";
import Post from "./post";
import Loading from "src/shared/components/loading";
import { useSelector, connect } from "react-redux";
import { popupSelector } from "src/shared/popup/popup.selector";
import { withAuth, withProfile } from "./App.enhance";
import { authSelector } from "src/auth/auth.selector";
import { postsSelector } from "./posts/posts.selector";
import withPosts from "src/routes/posts/posts.enhance";
import PrivateRoute from "src/shared/components/privateRoute";
import CreatePost from "./createPost";
import Profile from "src/routes/profile";
import UpdatePost from "src/routes/updatePost";
import { configsSelector } from "src/configs/configs.selector";
import withConfigs from "src/configs/configs.enhance";

export interface IProps {
  auth: any;
  posts: any;
  configs: any;
}

const App = (props: IProps) => {
  const popup = useSelector(popupSelector);
  const popupOpen = !!popup.toggle;
  return (
    <Styled className={`app ${popupOpen ? "popup-open" : ""}`}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/post/:id" component={Post}></Route>
        <PrivateRoute exact path="/profile" component={Profile}></PrivateRoute>
        <PrivateRoute
          exact
          path="/create-post"
          component={CreatePost}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/update-post/:id"
          component={UpdatePost}
        ></PrivateRoute>
      </Switch>
      <Popup />
    </Styled>
  );
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      auth: authSelector(state),
      posts: postsSelector(state),
      configs: configsSelector(state)
    }),
    {}
  ),
  withPosts,
  withAuth,
  withConfigs,
  branch(
    (props: IProps) => !props.posts.isFetched || !props.configs.isFetched,
    renderComponent((props: IProps) => <Loading />)
  ),
  branch(
    (props: IProps) => !props.auth.isAuthen,
    renderComponent((props: IProps) => <App {...props} />)
  ),
  withProfile,
  branch(
    (props: IProps) => !props.auth.isFetched,
    renderComponent((props: IProps) => <Loading />)
  )
)(App);
