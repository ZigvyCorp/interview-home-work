import React, { memo, useEffect, useMemo, useState } from "react";

import { Link, useParams } from "react-router-dom";
import path from "routes/path";
import { Navigation, UserSkeleton, Micro } from "components";
import Logo from "assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "redux/AsyncAction/user";
import Avatar from "assets/img/avatar.png";
import { icons } from "utils/icons";
import ExpandUser from "./ExpandUser";
import ExpandCart from "./ExpandCart";
import { productService } from "services/productService";
import ExpandSearch from "./ExpandSearch";

const { BsCart2 } = icons;
const Header = ({ valueSearch, setValueSearch }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector((state) => state.userSlice);
  const [productSearch, setProductSearch] = useState([]);
  const [expandMsg, setExpandMsg] = useState(false)



  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isLoggedIn) dispatch(getCurrentUser());
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch, isLoggedIn]);





  return (
    <header className="border w-full bg-main shadow-xl fixed z-[100]">
      <div className="w-full border-b-[1px] border-gray-300">
        <div className="w-main my-0 mx-auto flex justify-between items-center py-4">
          <Link to={`/${path.HOME}`}>
            <img width={200} src={Logo} alt="" />
          </Link>
          <div className="relative w-[50%]">
            <input
              type="text"
              placeholder="Search...."
              className="w-full flex px-3 py-2 rounded-xl outline-none shadow-sm my-0 mx-auto text-sm italic border border-main"
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <Micro setValueSearch={setValueSearch} className="p-3 absolute top-0 right-[5px]" />

          </div>

          <div className="flex items-center text-xl">

            {isLoggedIn && currentUser ? (

              <div className="flex items-center">
                <div className="flex items-center relative ease-in duration-300 group after:absolute after:left-0 after:bottom-[-15px] after:w-[150px] after:h-[20px]  ">

                  <img
                    className="w-[40px] cursor-pointer shadow-md rounded-full"
                    src={
                      currentUser?.image
                        ? `${currentUser?.image}`
                        : Avatar
                    }
                    alt=""
                  />
                  <small className="text-sm ml-2 text-blue-500">
                    Welcome,{" "}
                    <p className="line-clamp-1">
                      {currentUser?.firstName} {currentUser?.lastName}
                    </p>
                  </small>
                  <div className="z-50 w-[250px] hidden  group-hover:block absolute ease-in duration-300 border py-3 left-[-15px] top-[50px] bg-white rounded-lg shadow-lg before:absolute before:w-3 before:h-3 before:-top-1 before:left-8 before:rotate-45 before:bg-white">
                    <ExpandUser currentUser={currentUser} />
                  </div>
                </div>
              </div>
              // </Skeleton>

            ) : (
              <Link
                to={path.LOGIN}
                className="flex flex-col text-sm cursor-pointer hover:text-main transition duration-300"
              >
                <span>Đăng nhập</span>
                <span>Đăng ký</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <div className="w-main my-0 mx-auto">
          <Navigation />
        </div>
      </div> */}
    </header>
  );
};

export default memo(Header);
