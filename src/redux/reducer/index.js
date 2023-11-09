import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import postsReducer from './postReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
});

export default rootReducer;
