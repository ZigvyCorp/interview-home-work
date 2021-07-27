import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderCustom from "./components/Header/HeaderCustom";
import CreatePost from "./pages/CreatePost/CreatePost";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Posts from "./pages/Post/Post";
import { getToken, getUser, setLogin } from "./store/actions/user.action";
import { RootState } from "./store/reducers";

const App = () => {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      dispatch(getToken());
    }
  }, [isLogged, dispatch]);
  useEffect(() => {
    if (token) {
      dispatch(setLogin());
      dispatch(getUser());
    }
  }, [token, dispatch]);
  return (
    <main>
      <Router>
        <HeaderCustom />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/create-post" component={CreatePost} />
        </Switch>
      </Router>
    </main>
  );
};

export default hot(App);
