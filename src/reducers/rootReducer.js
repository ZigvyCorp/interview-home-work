import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";

// const userPersistConfig = {
//   key: "user",
//   storage: storage,
//   blacklist: ["response"],
// };

export default combineReducers({
  user: userReducer,
  blog: blogReducer,
});
