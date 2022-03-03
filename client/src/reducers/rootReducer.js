import {combineReducers} from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    postsData: postReducer,
    commentsData:commentReducer,
    usersData:userReducer
});

export default rootReducer;