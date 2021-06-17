import { combineReducers } from "redux";
import posts from './posts';
import modal from './modal';
import auth from './auth';
import comment from './comment';
export default combineReducers({
posts,
modal,
auth,
comment
});