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
                            <div className="col-md-2 ml-5">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo"/>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>           
        </>
    )
}

export default Navbar
