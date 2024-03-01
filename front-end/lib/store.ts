import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { postsSlice } from "./features/posts/postsSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
	return {
		getItem() {
			return Promise.resolve(null);
		},
		setItem(_key: string, value: number) {
			return Promise.resolve(value);
		},
		removeItem() {
			return Promise.resolve();
		},
	};
};

const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage();

const persistConfig = {
	key: "persist",
	storage,
};

const rootReducer = combineSlices(counterSlice, postsSlice, quotesApiSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

const makeConfiguredStore = () =>
	configureStore({
		reducer: rootReducer,
	});

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
	const isServer = typeof window === "undefined";
	if (isServer) {
		return makeConfiguredStore();
	} else {
		const persistedReducer = persistReducer(persistConfig, rootReducer);
		let store: any = configureStore({
			reducer: persistedReducer,
		});
		store.__persistor = persistStore(store);
		return store;
	}
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
