import { combineReducers } from 'redux';
import { CommentDetailReducer } from './CommentDetailReducer';
import { CommentsReducer } from './CommentReducer';
import { PostsDetailReducer } from './PostDetailReducer';
import { PostsReducer } from './PostReducer';
import { UsersReducer } from './UserReducer';


const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  postDetail: PostsDetailReducer,
  commentDetail: CommentDetailReducer,
});

export default rootReducer;
