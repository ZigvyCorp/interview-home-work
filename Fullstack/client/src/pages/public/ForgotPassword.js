import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "assets/img/login-animate.json";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import path from "routes/path";
import { userService } from "services/userService";
import { toastError, toastSucess } from "utils/helpers";
import Logo from "assets/img/logo.png";

import ModalVerify from "components/Modal/ModalVerify";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "components/Input/Input";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  const [isModal, setIsModal] = useState(false)
  const [isVerifySuccess, setIsVerifySuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",

    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),

    }),
    onSubmit: async (values) => {


      const response = await userService.handleForgotPassword(values)
      if (response?.success) {
        toastSucess(response?.msg)
        setIsModal(true)
      } else {
        toastError(response?.msg)

      }


    },

  });

  return (
    <div className="w-screen h-screen bg-[url('https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg')] bg-cover bg-center">
      {isModal && <ModalVerify setIsVerifySuccess={setIsVerifySuccess} open={isModal} setOpen={setIsModal} email={formik.values.email} type="reset-password" />}
      <div className="w-full h-full flex  justify-center items-center backdrop-blur-md">
        <div className="grid grid-cols-2 w-[60%] min-h-[60vh]">
          <div className="bg-blue-500 flex justify-center items-center">
            <Lottie
              style={{ width: "70%" }}
              animationData={loginAnimation}
              loop={true}
            />
          </div>
          <div className=" bg-white  flex flex-col justify-center items-center px-[50px]">
            <img src={Logo} alt="" />
            {!isVerifySuccess ?
              <form className="w-full" onSubmit={formik.handleSubmit}>


                <Input
                  type="email"
                  name="email"
                  handleChange={formik.handleChange}
                  value={formik.values.email}
                  errors={formik.errors.email}
                  touched={formik.touched.email}
                />
                <Button type="submit" name="Send OTP" />
                <div className="flex justify-between w-full mt-2 ">
                  <Link
                    to={`/${path.LOGIN}`}
                    className="text-sm italic cursor-pointer ease-out duration-300 hover:text-black hover:underline"
                  >
                    Login
                  </Link>
                </div>

              </form> : <ResetPassword email={formik.values.email} />
            }




          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
