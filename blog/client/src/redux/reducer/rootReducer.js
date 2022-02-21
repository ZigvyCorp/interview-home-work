import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer"
import postReducer from './postReducer'
export const rootReducer = combineReducers({
    loading:loadingReducer,
    posts:postReducer
})