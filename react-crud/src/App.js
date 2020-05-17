import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeListPost from "./components/home/home-list-post.component";
import Login from "./components/login/login.component";
import UserProfile from "./components/user/user-profile.component";

class App extends Component {

  render() {
    var userId = localStorage.getItem("userId");
    var userName = localStorage.getItem("userName");
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">BLOGS</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {
                userId && userId !== "" ?
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="/user-profile">{userName}</a>
                      </li>
                    </ul>
                  </div>
                : null
              }
            </div>
          </nav>
          {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tutorials"} className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user-profile"} className="nav-link">
                  Adam Levine
                </Link>
              </li>
            </div>
          </nav> */}

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/login"]} component={Login} />
              <Route exact path="/home" component={HomeListPost} />
              <Route exact path="/user-profile" component={UserProfile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;