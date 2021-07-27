import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootSaga from "./sagas";
import { reducers } from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["user"],
};
const saga = createSagaMiddleware();
const middleware = [saga];
const pReducer = persistReducer(persistConfig, reducers as any);
export const store = createStore(pReducer, {} as any, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
saga.run(rootSaga);
