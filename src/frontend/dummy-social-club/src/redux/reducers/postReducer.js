import * as types from '../actions/actionTypes';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ALL_POSTS:
      return { ...state, posts: action.posts};
    case types.CREATE_NEW_POST:
      return { ...state, posts: state.posts.concat(action.post) };
    default:
      return state;
  }
}