import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import PageNotFound from './PageNotFound';
import Header from './components/common/Header'
import UserDetailPage from './components/user_detail/UserDetail'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/userdetail" component={UserDetailPage}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
