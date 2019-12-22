import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Blogs from './containers/Blogs/Blogs';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import Signup from './containers/Signup/Signup';
import CreateNewPost from './containers/CreateNewPost/CreateNewPost';
import * as actions from './store/actions';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.checkMe();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Blogs} />
        <Redirect to="/" />
      </Switch>
    )
    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/create-new-post" component={CreateNewPost} />
          <Route path="/" exact component={Blogs} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {token} = state.authen;
  return {
    isAuthenticated: !!token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkMe: () => dispatch(actions.checkMe())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));