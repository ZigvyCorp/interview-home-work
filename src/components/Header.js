import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='row'>
            <div className="col-5">
                <Link className='text-decoration-none' to='/'>
                    <span className="logo fs-2 ms-5 text-white">Logo</span>
                </Link>
            </div>
            <div className="col-2">
                <Link className='text-decoration-none' to='/'>
                    <p className="title fs-2 text-decoration-none text-center text-white mb-0">Blogs</p>
                </Link>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
                <span className="avatar">
                    <img className='img-container' src="https://images.unsplash.com/photo-1670510953302-b676801bcb5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
                </span>
                <p className="ms-2 fs-4 mb-0 text-white">
                    Leanne Graham
                </p>
            </div>
        </header>
    );
};

export default Header;