import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
});

export default rootReducer;
