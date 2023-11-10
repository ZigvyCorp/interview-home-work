import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isHomePage, setIsHomePage] = useState(true);
    const [isSearchPage, setIsSearchPage] = useState(false);

    const homePage = () => {
        setIsHomePage(true);
        setIsSearchPage(false);
    }

    const searchPage = () => {
        setIsHomePage(false);
        setIsSearchPage(true);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <div className="container-md">
                <Link className="navbar-brand">Simple Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-4" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={homePage}>
                            <Link className={`nav-link mx-2 ${isHomePage && "active"}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item" onClick={searchPage}>
                            <Link className={`nav-link mx-2 ${isSearchPage && "active"}`} to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}