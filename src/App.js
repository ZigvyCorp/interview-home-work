import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponent from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
