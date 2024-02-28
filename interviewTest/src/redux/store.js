import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReduce";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return [...middleware, sagaMiddleware];
  },
  devTools: process.env.NODE_ENV !== "production",
});
sagaMiddleware.run(mySaga);

const persistor = persistStore(store);
export { store, persistor };
