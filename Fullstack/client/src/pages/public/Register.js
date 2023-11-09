import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "assets/img/login-animate.json";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import path from "routes/path";
import { userService } from "services/userService";
import { toastError } from "utils/helpers";
import Logo from "assets/img/logo.png";
import ModalVerify from "components/Modal/ModalVerify";
import { useFormik } from "formik";
import * as Yup from "yup"
import Input from "components/Input/Input";
import { on_loading, off_loading } from "redux/slice/loadingSlice";
import { useDispatch } from "react-redux";


const Register = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {

      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(6, "Your first name must be under 6 characters!")
        .required("You must fill in this section!"),
      lastName: Yup.string()

        .max(6, "Your last name must be under 6 characters!")
        .required("You must fill in this section!"),

      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      password: Yup.string()
        .min(6, "Your password must be at least 6 characters!")
        .required("You must fill in this section!"),

    }),
    onSubmit: async (values) => {
      dispatch(on_loading())
      const response = await userService.handleRegister(values);
      if (response?.success) {
        dispatch(off_loading())

        setIsModal(true);
      } else {
        dispatch(off_loading())

        toastError(response?.msg);
      }

    },
  })

  return (
    <div className="w-screen h-screen bg-[url('https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg')] bg-cover bg-center">
      {isModal && <ModalVerify open={isModal} setOpen={setIsModal} email={formik.values.email} path={`/${path.LOGIN}`} type="verify-email" />}
      <div className="w-full h-full flex  justify-center items-center backdrop-blur-md">
        <div className="grid grid-cols-2 w-[60%] min-h-[70vh]">
          <div className="bg-blue-500 flex justify-center items-center">
            <Lottie
              style={{ width: "70%" }}
              animationData={loginAnimation}
              loop={true}
            />
          </div>
          <div className=" bg-white  flex flex-col justify-center items-center px-[50px]">
            <Link to={`/${path.HOME}`}>
              <img src={Logo} alt="" />
            </Link>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <Input type="text" name="firstName" handleChange={formik.handleChange} value={formik.values.firstName} errors={formik.errors.firstName} touched={formik.touched.firstName} />
                <Input type="text" name="lastName" handleChange={formik.handleChange} value={formik.values.lastName} errors={formik.errors.lastName} touched={formik.touched.lastName} />

              </div>

              <Input type="text" name="email" handleChange={formik.handleChange} value={formik.values.email} errors={formik.errors.email} touched={formik.touched.email} />
              <Input type="password" name="password" handleChange={formik.handleChange} value={formik.values.password} errors={formik.errors.password} touched={formik.touched.password} />
              <Button name="Sign up" type="submit" />
            </form>

            <div className="flex justify-between w-full mt-2 ">
              <Link
                to={`/${path.LOGIN}`}
                className="text-sm italic cursor-pointer ease-out duration-300 hover:text-black hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
