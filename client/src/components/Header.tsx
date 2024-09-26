import React from "react";

const Header = () => {
  return (
    <div className="p-4">
      <div className="container-fluid border border-dark border-5 fw-bold fs-4">
        <div className="row p-0">
          <div className="col-5 p-0 align-item-middle d-flex">
            <img src="logo.png" alt="Logo" width={50} />
            <span className="text-center ms-3">Logo</span>
          </div>
          <div className="col-2 px-5 border-end border-start border-dark border-5 d-flex align-item-middle" style={{backgroundColor: "gainsboro"}}>
            <span className="text-center">Blogs</span>
          </div>
          <div className="col-5 p-0 d-flex align-item-middle flex-row-reverse">
            <span className="ms-3" style={{ width: "20vw" }}>Logo</span>
            <img
              className="border-end border-start border-dark border-5"
              height={50}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s"
              alt="Comment author avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
