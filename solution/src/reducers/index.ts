import { combineReducers } from 'redux';
import postsReducer from './../post_reducer/PostReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;