import { combineReducers } from 'redux';
import posts from './postsReducer'
const myReducer = combineReducers({
    posts
});

export default myReducer;