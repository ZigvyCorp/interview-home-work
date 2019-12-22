import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './../../components/NavBar/NavBar';
class Layout extends Component {

  render() {
    return (
      <>
        <NavBar 
          isAuthenticated={this.props.isAuthenticated} 
          userInfor={this.props.user}
        />
        <div className="container">
          {this.props.children}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { token, userData } = state.authen;
  return {
    isAuthenticated: !!token,
    user: userData
  }
}

export default connect(mapStateToProps)(Layout);