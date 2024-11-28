import { combineReducers } from 'redux';
import postsReducer from './postsSlice'; 

const rootReducer = combineReducers({
    postsData: postsReducer, 
});

export default rootReducer;
