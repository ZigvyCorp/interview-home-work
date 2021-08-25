import {combineReducers} from 'redux';

import {postReducer} from './posts.reducer';
export const rootReducer = combineReducers({
  posts: postReducer,
});
