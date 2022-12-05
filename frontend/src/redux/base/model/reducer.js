import { combineReducers } from "redux";
import postReducer from '../../models/postReducer';
import commentReducer from "../../models/commentReducer";
import userReducer from "../../models/userReducer";

const reducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
})

export default reducer