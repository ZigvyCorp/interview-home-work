import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blogs from './views/BlogsPage';
import Home from './views/HomePage';
import Account from './views/AccountPage';
import TopMenu from './components/TopMenu';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      <Switch>
        <Route path='/account'>
          <Account />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
