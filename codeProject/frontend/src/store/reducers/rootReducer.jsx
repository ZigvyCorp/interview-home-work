// reducers/index.js

import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import commentReducer from "./commentReducer";
import postReducer from "./postsReducer";
const rootReducer = combineReducers({
  example: exampleReducer,
  comments: commentReducer,
  posts: postReducer,

  // Add other reducers here if needed
});

export default rootReducer;
