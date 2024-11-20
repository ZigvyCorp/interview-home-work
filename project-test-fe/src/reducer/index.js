import { combineReducers } from 'redux';
import {PostsReducer} from './PostReducer';
import {UsersReducer} from './UserReducer';
import {CommentsReducer} from './CommentReducer';
import {PostsDetailReducer} from './PostDetailReducer';
import {CommentDetailReducer} from './CommentDetailReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  postDetail: PostsDetailReducer,
  commentDetail: CommentDetailReducer,
});

export default rootReducer;
