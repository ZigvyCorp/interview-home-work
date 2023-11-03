import { combineReducers } from "redux";
import { blogReducer } from "./reducer";



export const rootReducer = combineReducers({
    blogTest : blogReducer
})