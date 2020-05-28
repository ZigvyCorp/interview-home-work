/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserFailed } from '../actions';
import { TOKEN } from '../utils/constant';

const Logout = props => {
    useEffect(() => {
        props.fetchUserFailedAction();
        localStorage.removeItem(TOKEN);
        props.history.push('/login');
    }, [])

    return <></>;
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isLogin: state.isLogin
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserFailedAction: bindActionCreators(fetchUserFailed, dispatch)
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));