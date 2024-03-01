import React from "react";
import { NavLink } from "react-router-dom";

export const ButtonBack: React.FC = () => {
  return (
    <NavLink to={"/"} className='fixed'>
      <p className='w-16 h-16 flex items-center justify-center bg-white rounded-full hover:animate-bounce duration-300'>
        <i className='fa-solid fa-left-long'></i>
      </p>
    </NavLink>
  );
};
