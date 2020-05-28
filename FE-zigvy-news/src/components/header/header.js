/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchUserSuccess } from "../../actions";
import PostCreate from "../posts/post-create";

const Header = (props) => {
  const { userState } = props;
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <nav
      className="navbar navbar-expand navbar-light bg-white topbar mb-4 shadow"
      style={{ zIndex: 999, position: "sticky", top: 0, left: 0, right: 0 }}>
      <Link to="/">
        <img src="/logo.png" style={{ height: 50 }} alt="" /> 
        <h3 className="d-sm-none d-lg-inline mb-0 ml-3">Zigvy News</h3>
      </Link>
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        {userState.isLogin && userState.user ? (
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600">
                {userState.user.name}
              </span>
              <img
                className="img-profile rounded-circle"
                src={userState.user.images}
                height={50}
                width={50}
                alt=""
              />
              <i className="fa fa-caret-down" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <Link className="dropdown-item" onClick={() => setShowCreateModal(true)}>
                <i className="fa fa-plus-square mr-2 text-gray-400"></i>
                New Post
              </Link>
              <Link to="/profile" className="dropdown-item">
                <i className="fa fa-user mr-2 text-gray-400"></i>
                Profile
              </Link>
              <Link to="/logout" className="dropdown-item">
                <i className="fa fa-sign-out mr-2 text-gray-400"></i>
                Logout
              </Link>
            </div>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="btn btn-light">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="btn btn-light">
                REGISTER
              </Link>
          </li>
          </>
        )}
      </ul>
      <PostCreate showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} />
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
