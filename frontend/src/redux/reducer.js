import { combineReducers } from 'redux';
import postReducer from '../features/Posts/Services/postReducer';
import commentReducer from '../features/Comments/Services/commentReducer';
import postSearchReducer from '../features/PostSearch/Services/postSearchReducer';
import postDetailReducer from '../features/PostDetail/Services/postDetailReducer';
import cmtPostDetailReducer from '../features/CommentDetail/Services/cmtPostDetailReducer';


const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    postSearch: postSearchReducer,
    postDetail: postDetailReducer,
    cmtPostDetail: cmtPostDetailReducer

    // Thêm các reducer khác nếu cần
});

export default rootReducer;