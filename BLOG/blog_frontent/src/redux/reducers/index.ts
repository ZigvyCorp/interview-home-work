import userReducer from './userReducer';
import postListReducer from './postListReducer';
import postReducer from './postReducer';

const rootReducer = {
    user: userReducer,
    postList: postListReducer,
    post: postReducer,
};

export default rootReducer;