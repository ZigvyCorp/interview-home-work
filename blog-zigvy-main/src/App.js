import React from "react";
import Header from "./components/Header";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import DetailPosts from "./components/DetailPost";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/detail/:id" component={DetailPosts} />
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
