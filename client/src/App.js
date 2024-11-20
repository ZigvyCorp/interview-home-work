import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import Store from '../src/store/store';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
