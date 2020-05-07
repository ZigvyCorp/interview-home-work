import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../../images/logo192.png'
import avatar from '../../images/default_avatar.png'

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
    const {currentUserId, userList} = this.props;
    const currentUser = currentUserId ? userList.filter(user => user.id == currentUserId) : null
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
          <div>
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              style={{ border: 'none', borderLeft: '2px solid #000', padding: '12px 16px 12px 18px', backgroundColor: '#ACACAC' }}
            >
              <img src={avatar} alt="" height={24} style={{ marginRight: 12 }} />
              {currentUser ? currentUser[0].name : 'Login'}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {currentUserId ? (
                <button class="dropdown-item" type="button" onClick={this.props.logout}>Logout</button>
              ) : (
                <div style={{ padding: 12 }}>
                  <div className="d-flex justify-content-between">
                    Username:
                    <input id="username" style={{ marginLeft: 16 }} />
                  </div>
                  <div className="d-flex justify-content-between" style={{ marginTop: 6 }}>
                    Password:
                    <input id="password" style={{ marginLeft: 16 }} />
                  </div>
                  <div className="d-flex justify-content-center" style={{ marginTop: 12 }}>
                    <button type="button" onClick={this.login}>Login</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div style={{ borderLeft: '2px solid #000', padding: '12px 16px 12px 18px', backgroundColor: '#ACACAC' }}>
            <img src={avatar} alt="" height={24} style={{ marginRight: 12 }} />
            {currentUser ? currentUser[0].name : 'Login'}
          </div> */}
        </div>
      </div>
    );
}
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    userList: state.userList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (credential, history) => {
      dispatch({ type: 'USER_LOGIN', data: credential, callBack: () => history.push('/home') });
    },
    logout: () => {
      dispatch({ type: 'UPDATE_CURRENT_USER_ID', userId: null })
    }
  }
};

NavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)

export default NavigationBar;