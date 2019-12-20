import React from 'react';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
//import { store } from './store/store.jsx';

import Main from './layouts/Main.layout'





import  { history } from './helpers/history.helpers';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
    // <Provider store={store}>
    //   <Router history={history}>
    //     <Switch>
    //       <PrivateRoute path="/admin" component={Admin} />
    //       <PrivateRoute path="/rtl" component={RTL} />
    //       <Route path="/login" component={LoginPage} />
    //       <Redirect from="/" to="/login" />
    //     </Switch>
    //   </Router>
    // </Provider>
  );
}

export default App;
