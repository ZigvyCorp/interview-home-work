import PostReducer from "../reducer/Post";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const commonConfig = {
  key: "auth",
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "token", "current"],
};

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
