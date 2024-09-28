import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../../../assets/images/logozigvy.png";
import avatar from '../../../../assets/images/noavatar.jpg'
import './header.css'
import { UserContext } from "../../../contexts/UserContext";
import Login from "../../../Login";

function Header() {

  const { user, logoutUser } = useContext(UserContext)
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <header className="wrapper">
      <div className="inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo ZigVy" />

          </Link>
          <Link to="/">
            <p className="textLogo">ZIGVY <br /> CORPORATION
            </p>
          </Link>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={avatar} alt="avatar" />
          </Link>
          {user ? (
            <Link to="/">
              <p className="textLogo">{user.username}<br /> {user.name}
              </p>
            </Link>
          ) : (
            <button className="btn btn-link" onClick={() => setShowLoginModal(true)}>
              Login/SignUp
            </button>
          )}
          {user ? (
            <button className="btn btn-link" onClick={() => logoutUser()}>
              Logout
            </button>
          ) : (
            null
          )}
        </div>
      </div>
      <Login
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </header>
  );
}

export default Header;
