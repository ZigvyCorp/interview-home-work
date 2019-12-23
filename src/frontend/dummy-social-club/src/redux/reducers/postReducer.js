import * as types from '../actions/actionTypes';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ALL_POSTS:
      return { ...state, posts: action.posts};
    default:
      return state;
  }
}