import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import empty from "assets/img/empty-cart.json";
import { Button, ChangeQuantity, Input, TableComponent } from "components";
import { Link, useNavigate } from "react-router-dom";
import path from "routes/path";
import { icons } from "utils/icons";
import { userService } from "services/userService";
import { couponService } from "services/couponService";
import { showDeleteConfirm, toastError, toastSucess } from "utils/helpers";
import { getCurrentUser } from "redux/AsyncAction/user";
import { on_loading, off_loading } from "redux/slice/loadingSlice";

const Cart = () => {
  const { currentUser } = useSelector((state) => state.userSlice);
  const [coupon, setCoupon] = useState(null)
  const [nameCoupon, setNameCoupon] = useState("");
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch();
  const { FiTrash2 } = icons;

  const subTotal = useMemo(() => {
    return currentUser?.cart.reduce((preVal, currentVal) => {
      return preVal + currentVal?.quantity * currentVal?.product?.price;
    }, 0);
  }, [currentUser?.cart]);

  const totalDiscount = useMemo(() => {
    return Math.round(subTotal * (1 - (coupon?.discount * 1) / 100) * 100) / 100;
  }, [subTotal, coupon]);

  const columns = [
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => {
        return renderAction(record);
      },
    },
    {
      title: "Image",
      dataIndex: ["product", "thump"],
      render: (text) => (
        <img
          width={70}
          src={text}
          alt=""
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "product",
      render: (text, row) => (
        <Link
          to={`/${text?.category.toLowerCase()}/${text?._id}/${text?.title}`}
        >
          {text?.category}/ {text?.title} ({row?.color})
        </Link>
      ),
    },
    {
      title: "Brand",
      dataIndex: ["product", "brand"],
    },
    {
      title: "Price",
      dataIndex: ["product", "price"],
      render: (text) => <p>${text}</p>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (_, record) => {
        const handleChangeQuantity = async (data) => {
          dispatch(on_loading())
          const response = await userService.handleChangeQuantity(data);
          if (response?.success) {
            dispatch(off_loading())

            dispatch(getCurrentUser());

          } else {
            dispatch(off_loading())

          }
        };
        return (
          <ChangeQuantity
            quantityProduct={record?.product?.quantity}
            record={record}
            quantity={record?.quantity}
            handleChangeQuantity={handleChangeQuantity}
          />
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "product",
      render: (text, row) => <p>${text?.price * row?.quantity}</p>,
    },
  ];

  const renderAction = (record) => {
    const handleDeleteCart = async () => {
      const response = await userService.handleDeleteCart(record?._id);
      if (response?.success) {
        toastSucess(response?.msg);
        dispatch(getCurrentUser());
      }
    };

    return (
      <div className="flex">
        <FiTrash2
          onClick={() => showDeleteConfirm(`this cart`, handleDeleteCart)}
          style={{ color: "gray", fontSize: "20px", cursor: "pointer" }}
        />
      </div>
    );
  };

  useEffect(() => {
    currentUser && setQuantity(currentUser)
  }, [currentUser])

  const applyCoupon = useCallback(
    async () => {
      const response = await couponService.handleGetCoupon(nameCoupon)
      if (response?.success) {
        toastSucess(response?.msg)
        setCoupon(response.coupon)
        setNameCoupon("")
      } else {
        toastError(response?.msg)
        setCoupon(null)



      }
    },
    [nameCoupon],
  )

  const handleClearCart = async () => {
    const response = await userService.handleClearCart()
    if (response?.success) {
      toastSucess(response?.msg)
      dispatch(getCurrentUser());

    }
  }






  return (
    <div>
      {currentUser?.cart.length > 0 ? (
        <>
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-4 flex items-center justify-between px-2">
              <h1 className="font-semibold text-2xl">Cart</h1>
              <p onClick={() => showDeleteConfirm(` all?`, handleClearCart)} className="text-sm text-main cursor-pointer hover:underline">Delete all</p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-4">

              <TableComponent
                columns={columns}
                data={currentUser?.cart}
                pagination={false}
              />
            </div>
            <div className="mt-5 col-span-2">
              <div className="bg-sub px-3 pb-3 ">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-3">
                    <Input value={nameCoupon} handleChange={(e) => setNameCoupon(e.target.value)} type="text" name="Coupon" />
                  </div>
                  <Button disabled={!nameCoupon && true} handleOnclick={applyCoupon} name="Apply" />
                </div>
              </div>
              <div className="bg-sub p-3 mt-5">
                <h3 className="font-semibold mb-3">Payment</h3>
                <div className="flex items-center justify-between ">
                  <h5>Subtotal</h5>
                  <p>${subTotal}</p>
                </div>
                {coupon && (
                  <div className="flex items-center justify-between ">
                    <h5>Discount</h5>
                    <p>{coupon?.discount}%</p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-3 border-t-2">
                  <h5>Total</h5>
                  <p>${coupon ? totalDiscount : subTotal}</p>
                </div>
                <Button handleOnclick={() => navigate(`/${path.CHECKOUT}`, { state: { coupon, subTotal, totalDiscount } })} name="Check out" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Lottie style={{ width: "30%" }} animationData={empty} loop={true} />
          <p className="text-sm text-sub">Not have product in cart</p>
          <Link
            to={`/${path.HOME}`}
            className="bg-feature text-hover p-2 rounded-lg cursor-pointer mt-2"
          >
            Buy now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
