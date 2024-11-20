import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    commentsReducer: commentsReducer
});

export default rootReducer;