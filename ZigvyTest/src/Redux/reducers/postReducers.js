import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import postAction from "../action/postAction";

const initialState = {
  posts: [],
  postReact: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case postAction.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.data,
      };
    case postAction.REACT_POST_SUCCESS:
      return {
        ...state,
        postReact: action.data,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "postState",
  storage: AsyncStorage,
  blacklist: ["posts"],
};
export default persistReducer(persistConfig, postReducers);
