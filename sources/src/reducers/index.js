import { combineReducers } from "redux";
import commentsReducer from "./comments";
import blogReducer from "./detailBlog";
import postsReducer from "./posts";
import usersReducer from "./users";


const rootReducer = combineReducers({
    listPosts: postsReducer,
    listComments: commentsReducer,
    listUsers: usersReducer,
    blog: blogReducer
});

export default rootReducer;