import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./views/login";
import DefaultLayout from "./container/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}></Route>
      <Route path="/" name="Home" component={DefaultLayout}></Route>
    </Switch>
  );
}

export default App;
