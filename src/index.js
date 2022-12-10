import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import App from './App';

import createSagaMiddleware from 'redux-saga';
import fetchPostsSaga from './components/store/sagas';
import postsReducer from './components/store/reducers';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { posts: postsReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware
  ]
});
sagaMiddleware.run(fetchPostsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
