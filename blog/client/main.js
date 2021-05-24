import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { Meteor } from 'meteor/meteor';
import { logger } from 'redux-logger';
import { render } from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../imports/ui/reducers';
import App from '../imports/ui/components/App';
import '../imports/startup/accounts-config.js';
import rootSaga from '../imports/ui/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

Meteor.startup(() => {
  render(  
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('render-target'));
});

if (module.hot) { module.hot.accept(App);}
