import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/index";
import Login from "./components/Login/index";
import NotFound from "./pages/NotFound/index";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home}></Route> 
            <Route path="/login" exact component={Login}></Route>
            <Route path="*" exact component={NotFound}></Route>
        </Switch>   
      </BrowserRouter> 
    </>
     
  );
}

export default App;
