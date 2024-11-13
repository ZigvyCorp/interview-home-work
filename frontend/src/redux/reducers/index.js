/**
 * @file index.js
 * @description This file combines all the reducers for the Redux store.
 * @module rootReducer
 */

import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;