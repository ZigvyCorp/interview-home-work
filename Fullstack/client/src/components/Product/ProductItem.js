import React, { memo, useState } from "react";
import { formatPrice, scrollUp } from "utils/helpers";
import LabelNew from "assets/img/label-new.png";
import LabelBest from "assets/img/label-best.png";
import { Link } from "react-router-dom";
import path from "routes/path";
import RateStar from "components/RateStar/RateStar";

const ProductItem = ({ product, isNew, normal }) => {
  return (
    <Link
      to={`/${product?.category?.toLowerCase()}/${product?._id}/${product?.title
        }`}
      onClick={scrollUp}
      className="bg-sub  rounded-md p-3 flex flex-col items-center cursor-pointer group "
    >
      <div className=" relative mb-3 py-[50px] min-h-[280px] flex justify-center items-center">
        <img
          className=" object-cover w-[80%] ease-out duration-300 group-hover:-translate-y-1.5 "
          src={`${product?.thump}`}
          alt=""
        />
        {normal ? (
          <></>
        ) : (
          <>
            <img
              src={isNew ? LabelNew : LabelBest}
              className="absolute top-0 right-0 w-[70px] h-[30px] object-cover"
              alt=""
            />
            <span className="absolute font-semibold top-[5px] right-[10px] text-hover">
              {isNew ? "New" : "Best"}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm line-clamp-1 font-semibold group-hover:text-main ease-out duration-300 text-center">
          {product?.title}
        </h1>
        <RateStar style={{ fontSize: "12px" }} value={product?.totalRatings} />

        <p className="text-lg text-main font-semibold mt-2 text-center">
          ${product?.price}
        </p>
      </div>
    </Link>
  );
};

export default memo(ProductItem);
