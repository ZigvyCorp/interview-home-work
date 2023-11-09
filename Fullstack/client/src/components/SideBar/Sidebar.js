import React, { memo, useEffect, useState } from "react";
import { MdList } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { categoryService } from "services/categoryService";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await categoryService.handleGetAllCategories();
    setCategories(response.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);



  return (
    <aside className="flex flex-col  ">
      <h1 className="text-xl font-semibold flex items-center  border-b-2 border-main px-3">
        <div className="text-[35px] py-3 ">
          <MdList />
        </div>
        CATEGORIES
      </h1>
      {categories?.map((el) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "p-3  text-main transition ease-out duration-500 text-sm"
                : "p-3  transition ease-out duration-300 text-sm"
            }
            key={el._id}
            to={`/products/${el.title}`}
          >
            {el.title}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default memo(Sidebar);
