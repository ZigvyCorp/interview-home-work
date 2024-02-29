import React, { useEffect } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUserById(1));
  }, [dispatch]);
  return (
    <div>
      <header className="flex w-full fixed z-50 bg-white items-center justify-between h-12 px-3">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="flex justify-center items-center text-[1.5rem] font-normal hover:text-blue-500">
          <Link to="/">Blogs</Link>
        </div>
        <div className="text-black">
          <Avatar
            size={35}
            icon={<UserOutlined />}
            style={{ backgroundColor: "#f56a00" }}
          />
          <span className="ml-2">User name</span>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
