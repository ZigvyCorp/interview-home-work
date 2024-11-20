import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className='nav'>
      <a href='/' className='logo'>
        <div className='logo-img'></div>
        <div className='logo-title'>Logo</div>
      </a>
      <a
        href='/'
        className='border-start border-end border-2 border-black blogs'
      >
        Blogs
      </a>
      <div className='user'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgkniQ6hwUE9STS99pNfxAtXruPtSNyChdBZ3rE6AzIsw_cxTvL7SEs8MMzYD6zgHSg&usqp=CAU'
          alt='user avatar'
          className='user-img'
        />
        <div className='username'>Adam Levin</div>
      </div>
    </div>
    // <nav className='navbar m-0 p-0 border border-3 border-black'>
    //   <div className='container-fluid m-0 p-0'>
    //     <a className='navbar-brand d-flex' href='/'>
    //       <div className='logo-img'></div>
    //       <div>Logo</div>
    //     </a>
    //     <a
    //       className='navbar-brand border-3 border-black border-start border-end'
    //       href='/'
    //     >
    //       <div className='nav-blogs'>Blogs</div>
    //     </a>
    //     <a className='navbar-brand' href='/'>
    //       User
    //     </a>
    //   </div>
    // </nav>
  );
};
export default navbar;
