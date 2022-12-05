import React from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../redux/actionTypes';

const Dashboard = () => {
  const dispatch = useDispatch()
  const postLength = useSelector(state => state.post.postList.length);
  if (postLength <= 0) {
    dispatch({
      type: Actions.GET_POST,
      payload: {}
    })
    dispatch({
      type: Actions.GET_USER,
      payload: {}
    })
    dispatch({
      type: Actions.GET_COMMENT,
      payload: {}
    })
  }

  return (
    <>
      <PostList />
    </>
  )
}

export default Dashboard