import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                
            <nav className="navbar navbar-dark bg-dark header">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <Link to="/">
                            <img src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg" alt="" width={100} className="d-inline-block align-text-top" /> 
                        </Link>
                        
                    </a>
                        <span className="navbar-brand">BLOG</span>
                        <span>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4" width={50} alt="Avatar" />
                        <span className="navbar-brand m-2">Le Duy Hoang</span> 
                        </span>
                </div>
            </nav>
            </header>
        )
    }
}

export default Header;