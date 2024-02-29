import { configureStore } from "@reduxjs/toolkit";
import { ENV } from "../constants/environments";
import createSagaMiddleware from "redux-saga";
import blogReducer from "./reducers/blogReducer";
import rootSaga from "../sagas";
import userReducer from "./reducers/userReducer";
import commentReducer from "./reducers/commentReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer,
    comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: ENV === "development",
});

// Start Saga
sagaMiddleware.run(rootSaga);

export default store;
