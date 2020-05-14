import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PostList from './posts/PostList.js';
import PostCreate from './posts/PostCreate';
import history from '../history';
import Header from './Header.js';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Router history={history}>
          <Header />

          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/post/new" exact component={PostCreate} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;