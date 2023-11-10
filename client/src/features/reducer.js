import { combineReducers } from "redux";
import postReducer from "./posts/postReducer";
import userReducer from "./users/userReducer";
import commentReducer from "./comments/commentReducer";
import searchItemReducer from "./searchItem/searchItemReducer";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
  searchItem: searchItemReducer,
});
export default rootReducer;
