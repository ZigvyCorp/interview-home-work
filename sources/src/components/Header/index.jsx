import React from 'react';
import './styles.scss';

function Header(props) {
    return (
        <div className="main-header">
            <div className="header-logo">

            </div>
            <div className="header-blogs">
                <h1>Blogs</h1>
            </div>
            <div className="header-user">
                <h1>User</h1>
            </div>
        </div>
    );
}

export default Header;