import { combineReducers } from '@reduxjs/toolkit';
import { homeReducer } from './home/slice';
import { postReducer } from './post/postSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  post: postReducer,
});

export default rootReducer;
