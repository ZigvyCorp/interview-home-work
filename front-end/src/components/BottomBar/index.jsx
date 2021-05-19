import React from 'react'
import { Link } from 'react-router-dom'

function index() {
    return (
        <div>
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
        </div>
    )
}

export default index
