import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='own-container'>
                <div className='header-container header-left row'>
                    <div className='header-item col-5 d-flex justify-content-start align-items-center'>
                        <button className='header-image' style={{ width: 50, height: 50, backgroundColor: "lightgray" }}></button>
                        <h5>Logo</h5>
                    </div>
                    <div className='header-item header-blog header-center col-2 d-flex justify-content-center align-items-center' style={{ backgroundColor: "lightgray" }}>
                        <h5 className='text-center'>Blog</h5>
                        <div className='box-arrow'></div>
                    </div>
                    <div className='header-item header-right col-5 d-flex justify-content-end align-items-center px-3'>
                        <button className='header-image' style={{ width: 50, height: 50, backgroundColor: "lightgray" }}></button>
                        <h5 className='header-username px-2'>Username</h5>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
