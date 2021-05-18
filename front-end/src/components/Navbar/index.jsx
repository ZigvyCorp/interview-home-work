import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import "./index.css"
function Navbar() {
    return (
        <>
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                            <div className="col-md-2 ">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo"/>
                                    </Link>
                                </div>
                            </div>
                    
                            <div className="col-md-6 mr-5 ">
                                <div className="search">
                                    <input type="text" placeholder="Search"/>
                                    <button ><i  className="fa fa-search"></i></button> 
                                </div>
                            </div>
                        
                            <div className="mr-5" >
                                <Link to="/login" className="btn__bottom-bar btn-sm mr-2 ">Login</Link>                 
                                <Link to="/register" className="btn__bottom-bar btn-sm mr-2 ">Register</Link>
                            </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">User</Link>
                    </li>
                    <li className="nav-item active ">
                        <Link   Link className="nav-link" to="#">Post</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
