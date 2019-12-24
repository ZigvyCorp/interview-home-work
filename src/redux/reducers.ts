import { combineReducers } from "redux";
import popup from "src/shared/popup/popup.reducer";
import configs from "src/configs/configs.reducer";
import notifications from "src/shared/nofitications/notifications.reducer";
import posts from "src/routes/posts/posts.reducer";
import post from "src/routes/post/post.reducer";
import signin from "src/routes/signin/signin.reducer";
import auth from "src/auth/auth.reducer";
import comments from "src/routes/post/childs/comments/comments.reducer";
import comment from "src/routes/comment/comment.reducer";
import createPost from "src/routes/createPost/createPost.reducer";
import profile from "src/routes/profile/profile.reducer";
import updatePost from "src/routes/updatePost/updatePost.reducer";

export default combineReducers({
  popup,
  configs,
  notifications,
  posts,
  post,
  signin,
  auth,
  comments,
  comment,
  createPost,
  updatePost,
  profile
});
