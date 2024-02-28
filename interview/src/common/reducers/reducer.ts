import { combineReducers } from "redux";
import "../../components/Post/post.css";
import PostReducer from "./postReducer";
import CommentReducer from "./commentReducer";

const rootReducer = combineReducers({
  post: PostReducer,
  comment: CommentReducer,
});
export default rootReducer;
