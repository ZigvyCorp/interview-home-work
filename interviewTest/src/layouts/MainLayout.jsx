import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
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
