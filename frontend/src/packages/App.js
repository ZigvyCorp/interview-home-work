import React from 'react';
import 'antd/dist/antd.css';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Homepage } from './@homepage';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <Homepage />
      </PersistGate>
    </Provider>
  );
};

export default App;
