import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingIn: false,
      shouldShowResultDiv: false,
      didLoginSucceed: false
    }

    this.authenticate = this.authenticate.bind(this);
  }
  
  componentDidMount() {
    this.props.requestUserList()
  }

  // getUserList = () => {
  //   fetch('/api/get_user_list')
  //   .then(res => res.json())
  //   .then(result => {
  //     this.props.updateUserList(result)
  //   })
  // }

  authenticate = () => {
    const { userList } = this.props

    const usr = document.getElementById('username').value
    const pwd = document.getElementById('password').value

    const filteredUserList = userList.filter(user => user.username == usr && user.password == pwd)
    if (filteredUserList.length > 0) {
      console.log('success')
    } else {
      console.log('fail')
    }
  }

  render() {
    console.log(this.props.userList)
    return (
      <div>
        <input id="username" />
        <input id="password" />
        <button type="button" onClick={this.authenticate}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestUserList: () => {
      dispatch({ type: 'REQUEST_USER_LIST' });
    }
  }
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login;