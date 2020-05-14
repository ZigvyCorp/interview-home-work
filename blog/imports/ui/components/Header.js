import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import PostSearch from './posts/PostSearch';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo" href="#">B</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">BLOG <span className="sr-only">(current)</span></a>
        </div>
      </div>

      <form className="form-inline">
        <PostSearch />
        <a className="nav-link"><AccountsUIWrapper /></a>
      </form>
    </nav>
  )
}

export default Header;