import { combineReducers } from '@reduxjs/toolkit';
import PostReducer from './PostReducer/reducer.js'
import UserReducer from './UserReducer/reducer.js'

const rootReducer = combineReducers({
    PostReducer,
    UserReducer
});

export default rootReducer;
