import postsReducer from './postSlice';
import usersReducer from './userSlice';

const rootReducer = {
    users: usersReducer,
    posts: postsReducer
};

export default rootReducer;
