import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostActionPage from "./pages/PostActionPage/PostActionPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/post/add" component={PostActionPage} />
        <Route exact path="/post/:id/edit" component={PostActionPage} />

        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
