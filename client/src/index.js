import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSageMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import mySaga from './redux/sagas';
import { AuthContextProvider } from "./context/AuthContext";
const sagaMiddleware = createSageMiddleware();

const store = createStore(reducers , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

