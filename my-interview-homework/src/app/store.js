import { combineReducers, createStore } from "redux";
import ActionHandle from "../pages/ActionHandle";
const appReducer = combineReducers({
  taskReducer: ActionHandle,
});

const store = createStore(appReducer, undefined, undefined);

export default store;
