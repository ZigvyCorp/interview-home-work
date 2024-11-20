import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="text-[30px] text-red-400">Oops! Page Not Found</div>
      <Link to={`/`}>
        <div className="font-bold">Back to home</div>
      </Link>
    </div>
  );
}
