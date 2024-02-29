import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("You must be logged in");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header></Header>
      <div className=" p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
