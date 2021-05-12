import { useContext, useRef,React } from "react";
import "./login.css";

import { loginCall } from "../../api/index";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

 


  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
    dispatch
    );
    console.log(username);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NguyenTranPhu Blog</h3>
          <span className="loginDesc">
            Connect with friends and the world around you .
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton"     >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
