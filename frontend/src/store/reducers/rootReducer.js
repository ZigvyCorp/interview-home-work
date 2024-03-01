import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';


const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    comments: commentReducer
});

export default rootReducer;