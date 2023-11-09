import React, { memo } from "react";
import Avatar from "assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux/slice/userSlice";
import { icons } from "utils/icons";
import path from "routes/path";

const HeaderAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { MdLogout, MdHome } = icons;
  const { currentUser } = useSelector((state) => state.userSlice);

  const logOut = () => {
    dispatch(logout());
    navigate(`/${path.LOGIN}`);
  };
  return (
    <header className="px-[50px] py-3 shadow-2xl w-full flex items-center justify-between">
      <h1>Logo</h1>
      <div className="relative group after:absolute after:right-0 after:bottom-[-15px] after:w-[200px] after:h-[20px]">
        <img
          className="w-[50px] cursor-pointer shadow-md rounded-full"
          src={currentUser?.image ? `${currentUser?.image}` : Avatar}
          alt=""
        />
        <div className="z-50 w-[250px] hidden group-hover:block absolute ease-in duration-300 border  right-[0px] top-[64px] bg-white rounded-lg shadow-lg before:absolute before:w-3 before:h-3 before:-top-1 before:right-5 before:rotate-45 before:bg-white">
          <Link
            to={`/${path.HOME}`}
            className="flex items-center cursor-pointer text-sm  gap-3.5 font-medium p-3 my-3 hover:bg-gray-300 transition-all ease-in-out duration-300"
          >
            <MdHome style={{ fontSize: "20px" }} /> Store
          </Link>
          <p
            onClick={logOut}
            className="flex items-center cursor-pointer text-sm  gap-3.5 font-medium p-3 my-3 hover:bg-gray-300 transition-all ease-in-out duration-300"
          >
            <MdLogout style={{ fontSize: "20px" }} /> Log Out
          </p>
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderAdmin);
