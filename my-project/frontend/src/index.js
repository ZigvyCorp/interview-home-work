import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";
import Home from './pages/home';
import './algorithm'
import Sign from "./pages/sign";
import Signup from './components/Signup';
import rootReducer from "./reducer";
import PostList from "./components/PostList";
import Sider from './components/sider';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/signin" component={Sign} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
        <Route path="/postlist" component={PostList} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
