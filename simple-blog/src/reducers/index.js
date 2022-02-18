import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer'

//Every single time when react app puts up, it will call reducers automatically one time.
export default combineReducers({
    posts: postReducer,
    users: userReducer
});