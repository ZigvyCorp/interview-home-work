import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="" component={NotFoundPage} />
            </Switch>
        </>
    );
}

export default App;
