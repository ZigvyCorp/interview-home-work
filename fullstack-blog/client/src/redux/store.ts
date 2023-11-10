import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import comment from "./reducers/comment.slice";
import post from "./reducers/post.slice";
import user from "./reducers/user.slice";

export const store = configureStore({
	reducer: {
		post,
		user,
		comment,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
