import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetails from './page/PostDetails';
import Home from './page/Home';
function App() {


  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={PostDetails} />
        </Switch>
      </Router>
    </>




  );
}

export default App;
