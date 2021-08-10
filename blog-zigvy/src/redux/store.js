import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";

//redux thunk
const middleware = [thunk];

//save state to localstorage
const setLocalStorage = (state) => {
  try {
    const persistantState = JSON.stringify(state);
    localStorage.setItem("persistantState", persistantState);
  } catch (err) {
    console.log(err);
  }
};

const getLocalStorage = () => {
  try {
    const persistantState = localStorage.getItem("persistantState");
    if (persistantState === null) return undefined;
    return JSON.parse(persistantState);
  } catch (e) {
    console.log(e);
  }
};

const store = createStore(
  rootReducers,
  getLocalStorage(),
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => setLocalStorage(store.getState()));

export default store;
