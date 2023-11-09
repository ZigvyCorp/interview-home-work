import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux/slice/userSlice";
import path from "routes/path";
import { icons } from "utils/icons";

const ExpandUser = ({ currentUser }) => {
  const {

    MdLogout,

  } = icons;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout());
    navigate(`/${path.LOGIN}`);
  };


  return (
    <>



      <p
        onClick={logOut}
        className="flex items-center cursor-pointer text-sm  gap-3.5 font-medium p-3  hover:bg-gray-300 transition-all ease-in-out duration-300"
      >
        <MdLogout style={{ fontSize: "20px" }} /> Log Out
      </p>
    </>
  );
};

export default memo(ExpandUser);
