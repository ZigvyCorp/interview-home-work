import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/posts/:id" exact>
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
