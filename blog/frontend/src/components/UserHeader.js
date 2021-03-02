import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { getUserById } from '../actions/userActions';

const UserHeader = ({ userId, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  if (!user) {
    return null;
  }

  return <h6>Author: {user.name}</h6>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userById.user.find((user) => user._id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
