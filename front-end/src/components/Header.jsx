import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-2 border-black font-semibold ">
      <div className="px-6">
        <Link to="/">Logo</Link>
      </div>
      <div className="border-x-2 border-black bg-gray-300 px-6 py-3">
        {" "}
        <Link to="/">Blogs</Link>
      </div>
      <div className="px-6">Adam levine</div>
    </div>
  );
};

export default Header;
