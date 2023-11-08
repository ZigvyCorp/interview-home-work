import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <a href='/'>Logo</a>
        </li>
        <li>
          <a href='/'>Blogs</a>
        </li>
        <li>
          <img src='' alt='user' />
          <div>Adam Levine</div>
        </li>
      </ul>
    </div>
  );
};
export default navbar;
