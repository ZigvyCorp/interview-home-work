import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Post />
            <Post />
            <Post />
        </React.Fragment>
    );
}

export default App;
