import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/useSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
