// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

import Post from './components/post/Post';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/header/Header";

function App() {
  
  return (
   <div>
    <Header />
   </div>
  );
}

export default App;
