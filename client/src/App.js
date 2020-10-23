import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import NewPost from './pages/NewPost';

class App extends Component {
  render() {
    const App = () => (
      <div style={{ backgroundColor: '#DCDCDC' }}>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/new-post' component={NewPost}/>
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