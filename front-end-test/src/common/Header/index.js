import React from 'react';
import Logo from '../../logo.png'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <nav className="navbar d-flex justify-content-between align-items-center border-0">
            <NavLink className="navbar-brand" to="/" exact>
                <img src={Logo} width="50" height="50" 
                className="d-inline-block align-top" alt="logged in user profile" />
            </NavLink>

            <NavLink className="NavItemLink text-uppercase text-dark h2 text-decoration-none"
                to="/"
                exact>Blog</NavLink>

            <div className="User d-flex align-items-center">
                <img src="https://external-preview.redd.it/XpBx1koNRvc-RNhguYzrrVLyi6ZhMjpau6TfEberwK0.jpg?auto=webp&s=eccb5675183341ffba4e15ac630fd8e19f2e6712" 
                    alt="blank user" width="50" height="50" className="rounded"/>
                <p className="d-none d-sm-block mb-0 ml-1 h5 ">Nat Romanoff</p>
            </div>


        </nav>

    );
}

export default Header;