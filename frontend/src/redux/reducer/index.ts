import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';

export const rootReducer = combineReducers({
    post: postReducer,
});
