import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
import postReducer from './reducer/postReducer';
import commentReducer from './reducer/commentReducer';


const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer,
	comment: commentReducer,
});

export default rootReducer;
