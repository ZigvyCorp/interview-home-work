import './App.css';
import Header from './components/header.jsx';
import Post from './components/post';
import { BrowserRouter,Router, Route, Link, NavLink, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Post/>
      <Post/>
    </div>
  );
};

export default App;
