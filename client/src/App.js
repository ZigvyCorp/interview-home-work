import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    const App = () => (
      <div style={{ backgroundColor: '#DCDCDC' }}>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;