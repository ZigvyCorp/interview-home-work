import { Avatar, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { get } from "../../apis";
import { RootState } from "../../store/reducers";
import "./Header.scss";

const HeaderCustom = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await get("/users/logout");
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <header className="header">
      <div className="header__item" onClick={() => history.push("/")}>
        Logo
      </div>
      <div className="header__item" onClick={() => history.push("/create-post")}>
        Blogs
      </div>
      <div className="header__item" onClick={() => history.push("/login")}>
        {user ? (
          <Button
            onClick={handleLogout}
            icon={<Avatar src={user.avatar} shape="square" />}
            title="Logout"
            style={{ border: "none", fontWeight: "bold", fontSize: "1.5rem", height: "90%" }}
          >
            {user.name}
          </Button>
        ) : (
          "Login"
        )}
      </div>
    </header>
  );
};

export default HeaderCustom;
