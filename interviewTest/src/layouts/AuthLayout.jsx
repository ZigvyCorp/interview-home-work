import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className=" flex flex-col items-center">
      <div className=" text-lg text-lime-300 font-semibold p-[30px]">
        Hello, have a nice daye
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
