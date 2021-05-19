import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import "./index.css"
import BottomBar from "../BottomBar/index"
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
            <BottomBar/>
           
        </>
    )
}

export default Navbar
