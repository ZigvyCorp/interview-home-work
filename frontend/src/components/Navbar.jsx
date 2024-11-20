import React from "react";

const Navbar = ({ userAvatar, userName }) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <div to='/' className='navbar-brand'>
                    <img
                        src={"/assets/images/logo.png"}
                        alt='Brand Logo'
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />
                    BLOGS
                </div>

                <div className='navbar-text ml-auto'>
                    <div className='d-flex align-items-center'>
                        <img
                            src={userAvatar}
                            alt='User Avatar'
                            width='30'
                            height='30'
                            className='rounded-circle mr-2'
                        />
                        {userName}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
