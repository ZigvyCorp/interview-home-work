import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import commentReducer from "../features/comment/commentSlice";
import rootSaga from "./rootSaga";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "blog",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);
