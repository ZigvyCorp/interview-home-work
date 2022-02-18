import './App.css';
import React from 'react';
import Header from './components/header.jsx';
import Post from './components/post';
import { BrowserRouter, Router, Route, Link, NavLink, Routes } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeApp />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}

function HomeApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Post/>
    </div>
  );
}

function About(){
  return(
    <h1>Loremipsum</h1>
  );
}
export default App;
