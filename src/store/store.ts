import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { counterReducer } from "./features/counter/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

type RootReducerType = Required<NonNullable<Parameters<typeof rootReducer>[0]>>;

const persistConfig: PersistConfig<RootReducerType> = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["counter"], // only counter will be persisted
  blacklist: [], // only counter will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
