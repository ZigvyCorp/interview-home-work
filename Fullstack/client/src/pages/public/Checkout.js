import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import empty from "assets/img/empty-cart.json";
import path from "routes/path";
import { Button, FormAddress } from "components";
import { icons } from "utils/icons";
import { Modal } from "antd";
import { showDeleteConfirm, toastError, toastSucess } from "utils/helpers";
import { userService } from "services/userService";
import { getCurrentUser } from "redux/AsyncAction/user";
import { paymentMethod } from "utils/constants";

const Checkout = () => {
  const { state } = useLocation();
  const { currentUser } = useSelector((state) => state.userSlice);
  const { FiPlus, FiEdit } = icons;
  const [isModal, setIsModal] = useState(false);
  const [type, setType] = useState("");
  const [currentAddress, setCurrentAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null)
  console.log('selectedAddress: ', selectedAddress);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethod[0]?.method
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const defaultAddress = currentUser?.address?.find((el) => el?.isDefault === true)
    defaultAddress && setSelectedAddress(defaultAddress)
  }, [currentUser?.address])

  useEffect(() => {
    !isModal && setCurrentAddress(null);
  }, [isModal]);

  useEffect(() => {
    if (currentUser?.address?.length <= 0) {
      setIsModal(true);
      setType("create");
    }
  }, []);


  const handlePayment = useCallback(async () => {


    if (currentUser?.address?.length <= 0) {
      toastError("Please enter address!");
      return;
    }
    const { _id, ...address } = selectedAddress

    const response = await userService.handleOrder({ paymentMethod: selectedPaymentMethod, coupon: state?.coupon?._id, address })
    if (response?.success) {
      toastSucess(response?.msg)
      dispatch(getCurrentUser());
    }
  }, [currentUser?.address, selectedAddress]);

  return (
    <div>
      {currentUser?.cart.length > 0 ? (
        <div className="grid grid-cols-6 gap-5">
          <Modal
            title={<h1 className="text-2xl ">Information receive</h1>}
            centered
            open={isModal}
            onCancel={() => setIsModal(false)}
            footer={null}
            width={650}
          >
            <FormAddress
              data={currentAddress}
              type={type}
              setIsModal={setIsModal}
            />
          </Modal>
          <div className="col-span-4">
            <div className="bg-sub p-3">
              <h1 className="font-semibold">Address</h1>
              <div className="grid grid-cols-2 gap-5 mt-5 ">
                {currentUser?.address.length > 0 &&
                  currentUser?.address?.map((el) => {
                    const handleDeleteAddress = async () => {
                      const response = await userService.handleDeleteAddress(
                        el?._id
                      );
                      if (response?.success) {
                        toastSucess(response?.msg);
                        dispatch(getCurrentUser());
                      }
                    };

                    return (
                      <div
                        onClick={() => setSelectedAddress(el)}
                        key={el?._id}
                        className={`${selectedAddress?._id === el?._id ? "border-sub border-2" : ""
                          } border text-sm rounded-lg cursor-pointer p-3 hover:bg-main border-main`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-semibold mr-1">
                              {el?.fullName}
                            </h3>
                            <div
                              onClick={() => {
                                setIsModal(true);
                                setType("edit");
                                setCurrentAddress(el);
                              }}
                            >
                              <FiEdit />
                            </div>
                          </div>
                          <FiPlus
                            onClick={() =>
                              showDeleteConfirm(
                                `this address?`,
                                handleDeleteAddress
                              )
                            }
                            className="text-lg rotate-45 text-sub hover:text-black"
                          />
                        </div>
                        <p>{el?.mobile}</p>
                        <p>
                          {el?.street}, {el?.ward?.name}, {el?.district?.name},{" "}
                          {el?.province?.name}
                        </p>
                      </div>
                    );
                  })}

                <div
                  onClick={() => {
                    setIsModal(true);
                    setType("create");
                  }}
                  className="border text-sub flex  items-center justify-center rounded-lg cursor-pointer py-8 hover:border-2 hover:border-main "
                >
                  <FiPlus className="text-2xl " />
                </div>
              </div>
            </div>
            <div className="bg-sub p-3 mt-5">
              <h1 className="font-semibold mb-5">Payment method</h1>
              <div className="grid grid-cols-2 gap-5">
                {paymentMethod?.map((el) => {
                  return (
                    <div
                      onClick={() => setSelectedPaymentMethod(el?.method)}
                      key={el?.id}
                      className={`${selectedPaymentMethod === el?.method &&
                        "border-sub border-2"
                        } border text-sm rounded-lg cursor-pointer p-3 hover:bg-main border-main`}
                    >
                      <p>{el?.method}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-sub p-3">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg">Information Order</h1>
                <Link to={`/${path.CART}`} className="text-main">
                  Edit
                </Link>
              </div>
              <div>
                {currentUser?.cart.map((el) => {
                  const { title, category, price, thump, _id } = el.product;
                  return (
                    <Link
                      to={`/${category.toLowerCase()}/${_id}/${title}`}
                      key={el._id}
                      className="flex items-center my-3 "
                    >
                      <img
                        width={80}
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
            </div>
            <div className="bg-sub p-3 mt-5">
              <div className="flex items-center justify-between ">
                <h5>Subtotal</h5>
                <p>${state?.subTotal}</p>
              </div>
              {state?.coupon && (
                <div className="flex items-center justify-between ">
                  <h5>Discount</h5>
                  <p>{state?.coupon?.discount}%</p>
                </div>
              )}

              <div className="flex items-center justify-between mt-3 ">
                <h5>Total</h5>
                <p className="font-semibold text-danger">
                  ${state?.coupon ? state?.totalDiscount : state?.subTotal}
                </p>
              </div>
              <Button handleOnclick={handlePayment} name="Payment" />
            </div>
          </div>
        </div>
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

export default Checkout;
