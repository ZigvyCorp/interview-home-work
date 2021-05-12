import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <div className="header__section container border border-dark">
        <div class="d-flex justify-content-between font-weight-bold">
          <div class="p-2">Logo</div>
          <div class="p-2 header__blog">Blogs</div>
          <div className="d-flex">
            <span className="rounded-circle">
              <img
                width="40"
                height="40"
                src="https://haymora.com/upload/images/cong_nghe_thong_tin/software/zigvy_corporation/logo-zigvy.jpg"
                alt=""
                srcset=""
              />
            </span>
            <div class="p-2">Adam Levine</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
