import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import NotFoundImg from "../assets/images/NotFound/404Capstone.png";

const Notfound = () => {
  return (
      <div className="max-w-screen-xl flex m-auto">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-[4rem] leading-3 p-6 font-semibold mb-[30px]">
            You got lost!
          </h1>
          <div className="mb-[16px] text-[rgba(106,106,107,1)] text-[1.175rem] leading-tight flex flex-col justify-center items-center">
            <p>We can't find what you're looking for.</p>
            <p>Let's bring you back to a place we know</p>
          </div>
          <Link
            to="/"
            className="p-[16px] text-[1.175rem] rounded bg-[#E04141] text-white"
          >
            Back to home
          </Link>
        </div>
        {/* <img
          src={NotFoundImg}
          alt="NotFoundImg"
          className="w-[50%] h-[500px] object-contain"
        /> */}
      </div>
  );
};

export default Notfound;
