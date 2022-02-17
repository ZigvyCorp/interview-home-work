import postReducer from "../features/Post/postSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  post: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
