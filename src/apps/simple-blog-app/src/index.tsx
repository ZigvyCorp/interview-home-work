import React from 'react';
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './shared/redux/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './shared/components/AppProvider/AppProvider';

const history = createHashHistory();
const reduxConfig = {
  initialState: {
  },
  rootReducer,
};
ReactDOM.render(
  <React.StrictMode>
    <AppProvider reduxConfig={reduxConfig}>
      <App history={history} />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();