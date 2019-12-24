import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSaga from "redux-saga";
import rootSaga from "./saga";

const saga: any = createSaga();

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);
