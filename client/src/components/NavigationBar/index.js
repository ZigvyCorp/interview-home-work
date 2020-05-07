import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../../images/logo192.png'

class NavigationBar extends Component {
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
      <div
        style={{ position: 'fixed', top: 0, zIndex: 1, width: '100%', height: 54,
          backgroundColor: '#fff', border: '2px solid #000'
        }}
      >
        <div className="d-flex justify-content-between" style={{ width: '100%' }}>
          <div style={{ borderRight: '2px solid #000', padding: '12px 18px 12px 16px', backgroundColor: '#ACACAC' }}>
            <img src={logo} alt="" height={24} style={{ marginRight: 12 }} />
            Logo
          </div>
          <div style={{ borderLeft: '2px solid #000', borderRight: '2px solid #000', padding: '12px 16px', backgroundColor: '#ACACAC'  }}>Blog</div>
          <div style={{ borderLeft: '2px solid #000', padding: '12px 16px 12px 18px', backgroundColor: '#ACACAC' }}>author</div>
        </div>
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

NavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)

export default NavigationBar;