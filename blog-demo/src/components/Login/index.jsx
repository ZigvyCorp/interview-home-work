import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/img/zigvy-logo.svg";
import { NavLink } from "react-router-dom";

import { history } from "../../App";
import { useSelector } from "react-redux";
const Login = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const [isLogin, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log(isLogin);

  const handleChangle = (e) => {
    let { name, value } = e.target;

    setLogin({
      ...isLogin,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let { username, password } = isLogin;

    const userCompare = userLogin.find(
      (user) => user.username === username && user.password === password
    );

    if (userCompare) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: userCompare.name,
          dob: userCompare.dob,
        })
      );

      // alert("Logged in successfully!");

      history.push("/");
    } else {
      alert("Username or password incorrect");
    }
  };

  return (
    <>
      <div className="container login__container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="block__item login__logo">
              <img src={Logo} alt="" />
              <p>Welcome to my blog. For more information please login.</p>
              <p className="login__demo">
                Username: <span>meowmeow</span>
              </p>
              <p className="login__demo">
                Password: <span>1234567890</span>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              action=""
              className="block__item form__login"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleChangle}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChangle}
                />
              </div>

              <button className="btn btn-primary form-control">Login</button>
              <NavLink to="">Forgot password?</NavLink>
              <hr />
              <button
                className="btn btn-success form__login__btn-register"
                disabled
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
