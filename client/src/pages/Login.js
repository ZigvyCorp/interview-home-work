import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingIn: false,
      shouldShowResultDiv: false,
      didLoginSucceed: false
    }

    this.login = this.login.bind(this);
  }

  login = () => {
    const usr = document.getElementById('username').value
    const pwd = document.getElementById('password').value

    this.props.authenticate({ username: usr, password: pwd }, this.props.history)
  }

  render() {
    return (
      <div>
        <input id="username" />
        <input id="password" />
        <button type="button" onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (credential, history) => {
      dispatch({ type: 'USER_LOGIN', data: credential, callBack: () => history.push('/home') });
    }
  }
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login;