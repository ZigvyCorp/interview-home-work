import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { Provider } from 'react-redux';
import { Homepage } from './@homepage';

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;
