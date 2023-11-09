import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import empty from "assets/img/empty-cart.json";
import path from "routes/path";

const ExpandCart = ({ cart }) => {
  const total = useMemo(() => {

    return cart?.reduce((preVal, currentVal) => {
      return preVal + currentVal?.quantity * currentVal?.product?.price;
    }, 0);
  }, [cart]);
  return (
    <>
      {cart?.length > 0 ? (
        <>
          <div className="border-b border-main">
            {cart.map((el) => {
              const { title, category, price, thump, _id } = el?.product;
              return (
                <Link
                  to={`/${category.toLowerCase()}/${_id}/${title}`}
                  key={el._id}
                  className="flex items-center mb-3 "
                >
                  <img
                    width={70}
                    src={`${thump}`}
                    alt=""
                  />
                  <div className="text-[12px] leading-3 ml-5">
                    <h3 className="hover:text-main duration-300">
                      {category}/ {title} ({el.color})
                    </h3>
                    <p className="text-sub my-1">Quantity: {el.quantity}</p>
                    <p>${price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-[15px]">Total price</p>
            <p className="text-[18px] font-semibold">${total}</p>
          </div>

        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Lottie style={{ width: "50%" }} animationData={empty} loop={true} />
          <p className="text-sm text-sub">Not have product in cart</p>
          <Link
            to={`/${path.HOME}`}
            className="bg-feature text-hover px-2 rounded-lg cursor-pointer mt-2"
          >
            Buy now
          </Link>
        </div>
      )}
    </>
  );
};

export default ExpandCart;
