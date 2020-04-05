import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Link } from "react-router-dom";
import { Router, Route, Switch } from 'react-router'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home"
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import  LoadingView  from "./components/LoadingView";
import history from './history';
import CreatePost from "./components/CreatePost";
function App() {
  return (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
       <Router history={history}>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/createpost' component={CreatePost} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
    </Router>
    </PersistGate>
  </Provider>
  
  );
}

export default App;
