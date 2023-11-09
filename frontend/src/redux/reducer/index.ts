import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
});
