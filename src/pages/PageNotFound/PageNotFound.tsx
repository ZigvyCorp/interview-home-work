import { ROUTES_PATH } from "@/common/enum/routes.enum";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center mt-3">
      <div className="fs-1 fw-bold ">Page Not Found!</div>
      <Link to={ROUTES_PATH.HOME}>
        <button className="bg-white border-0">Quay lại trang chủ</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
