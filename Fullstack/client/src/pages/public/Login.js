import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "assets/img/login-animate.json";
import Button from "components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import path from "routes/path";
import { userService } from "services/userService";
import { toastError, toastSucess } from "utils/helpers";
import Logo from "assets/img/logo.png";
import { useDispatch } from "react-redux";
import { login } from "redux/slice/userSlice";
import ModalVerify from "components/Modal/ModalVerify";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import { on_loading, off_loading } from "redux/slice/loadingSlice";


const Login = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      password: Yup.string()
        .min(6, "Your password must be at least 6 characters!")
        .required("You must fill in this section!"),
    }),
    onSubmit: async (values) => {
      dispatch(on_loading())
      const response = await userService.handleLogin(values);
      if (response?.success) {

        toastSucess(response?.msg);
        dispatch(
          login({
            isLoggedIn: true,
            accessToken: response?.accessToken,
            userData: response?.userData,
          })
        );
        dispatch(off_loading())

        navigate(`/${path.HOME}`);
      } else {
        dispatch(off_loading())

        toastError(response?.msg);
      }
    },
  });

  return (
    <div className="w-screen h-screen bg-[url('https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg')] bg-cover bg-center">
      {isModal && <ModalVerify open={isModal} setOpen={setIsModal} />}
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
            <Link to={`/${path.HOME}`}>
              <img src={Logo} alt="" />
            </Link>
            <form className="w-full" onSubmit={formik.handleSubmit}>
              <Input
                type="email"
                name="email"
                handleChange={formik.handleChange}
                value={formik.values.email}
                errors={formik.errors.email}
                touched={formik.touched.email}
              />
              <Input
                type="password"
                name="password"
                handleChange={formik.handleChange}
                value={formik.values.password}
                errors={formik.errors.password}
                touched={formik.touched.password}
              />
              <div>
                <Link
                  to={`/${path.FORGOTPASSWORD}`}
                  className="text-sm flex justify-end mt-1 italic cursor-pointer ease-out duration-300 hover:text-black hover:underline"
                >
                  Forgot password
                </Link>
              </div>
              <Button name="Login" type="submit" />
            </form>
            <div className="flex justify-center w-full mt-3 ">
              <p>Not have already register? <span>
                <Link
                  to={`/${path.REGISTER}`}
                  className="text-sm italic cursor-pointer ease-out duration-300 text-main hover:underline"
                >
                  Sign up
                </Link>
              </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
