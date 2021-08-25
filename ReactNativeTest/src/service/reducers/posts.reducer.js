import {
  fetchPostSuccessAction,
  fetchPostFailAction,
  fetchPostAction,
} from '../actions/posts.actions';

const initState = {
  loading: false,
  data: [],
};

const returnState = (state, payload) => ({...state, ...payload});

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case fetchPostAction.type:
      return returnState(state, {loading: true});
    case fetchPostSuccessAction.type:
      return returnState(state, {
        data: action.payload.posts,
        loading: false,
      });
    case fetchPostFailAction.type:
      return returnState(state, {loading: false});
    default:
      return state;
  }
};
