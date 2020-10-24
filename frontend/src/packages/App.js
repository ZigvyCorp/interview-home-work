import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { Provider } from 'react-redux';
import { Test } from './@homepage';

const App = () => {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
};

export default App;
