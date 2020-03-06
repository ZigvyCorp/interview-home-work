import { combineReducers } from 'redux';
import login from './loginReducer';
import register from './registerReducer';
import addPost from './addPostReducer';

const rootReducer = combineReducers({
    login, register, addPost
});

export default rootReducer;