import React from 'react';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './store/store';

import Main from './layouts/Main.layout'





import  { history } from './helpers/history.helpers';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
