import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoryService } from "services/categoryService";
import { scrollUp } from "utils/helpers";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await categoryService.handleGetAllCategories();
    setCategories(response?.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="mt-5">
      <div className="grid grid-cols-10 bg-sub gap-3 rounded-lg shadow-sm py-5">
        {categories?.map((el) => {
          return (
            <NavLink
              onClick={scrollUp}
              to={`/products/${el.title}`}
              key={el._id}
              className="flex flex-col items-center cursor-pointer  group"
            >
              <img
                className="group-hover:scale-100 scale-75 ease-out duration-300 h-full object-cover"
                width={80}
                src={`${el?.image}`}
                alt=""
              />
              <h3 className="text-sm">{el.title}</h3>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default ListCategory;
