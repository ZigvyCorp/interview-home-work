import logo from './logo.svg';
import './App.css';
import * as Realm from "realm-web";
import Main from "../src/main";

import Navigation from '../src/navigation';

import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
