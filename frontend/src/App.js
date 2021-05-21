import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home}></Route> 
        </Switch>   
      </BrowserRouter> 
    </>
     
  );
}

export default App;
