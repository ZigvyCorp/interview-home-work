import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { connect } from "react-redux";
import BasicForm from "../../utilities/formComponents/BasicForm";
import Input from "../../utilities/formComponents/Input";
import Button from "../../utilities/formComponents/button";
import Error from "../../utilities/Error";
import {
  logInUserAction,
  clearAuthErrorStatusAction,
} from "../../actions/actionCreator";
import AuthenticationFormContainer from "./AuthenticationFormContainer";

const LogIn = ({ logInUserAction, clearAuthErrorStatusAction, response }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    clearAuthErrorStatusAction();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const userCredentials = { username, password };
    logInUserAction(userCredentials);
  };
  return (
    <BasicForm title="Zigvy Blog" subtitle="Log In" onSubmit={onSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="username"
        onChange={(value) => {
          setUsername(value);
        }}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(value) => {
          setPassword(value);
        }}
      />
      {response && response.error && <Error>{response.error}</Error>}
      <Button type="submit" className="p-1 w-100 text-uppercase my-3">
        Log In
      </Button>
      <Link to="/signup">Not a member? Sign up here!</Link>
    </BasicForm>
  );
};

const mapStateToProps = ({ user: { response } }) => {
  return { response };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUserAction: (user) => dispatch(logInUserAction(user)),
    clearAuthErrorStatusAction: () => dispatch(clearAuthErrorStatusAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationFormContainer(LogIn));
