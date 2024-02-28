import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post.slice";
import { postApi } from "./services/post.api";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import { userApi } from "./services/user.api";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,

    user: userReducer,
    [userApi.reducerPath]: userApi.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat([postApi.middleware,userApi.middleware]),
    
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


