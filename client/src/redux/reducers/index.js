import { combineReducers } from "redux";
import posts from './posts';
import modal from './modal';
import auth from './auth';
export default combineReducers({
posts,
modal,
auth
});