import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { connect } from "react-redux";
import BasicForm from "../../utilities/formComponents/BasicForm";
import Input from "../../utilities/formComponents/Input";
import Error from "../../utilities/Error";
import Button from "../../utilities/formComponents/button";
import {
  signUpUserAction,
  clearAuthErrorStatusAction,
} from "../../actions/actionCreator";
import AuthenticationFormContainer from "./AuthenticationFormContainer";

const SignUp = ({ signUpUserAction, clearAuthErrorStatusAction, response }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthDate] = useState("");

  useEffect(() => {
    clearAuthErrorStatusAction();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, password, name, birthdate };
    signUpUserAction(userInfo);
  };

  return (
    <BasicForm title="Zigvy Blog" subtitle="Sign up" onSubmit={onSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
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
      <Input
        type="text"
        name="name"
        placeholder="Display Name"
        onChange={(value) => {
          setName(value);
        }}
      />
      <span>Date of Birth:</span>
      <Input
        type="date"
        name="dob"
        onChange={(value) => {
          setBirthDate(value);
        }}
      />
      {response && response.error && <Error>{response.error}</Error>}
      <Button type="submit" className="p-1 w-100 text-uppercase my-3">
        Sign Up
      </Button>
      <Link to="/login">Already a member? Log in here!</Link>
    </BasicForm>
  );
};

const mapStateToProps = ({ user: { response } }) => {
  return { response };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUserAction: (user) => dispatch(signUpUserAction(user)),
    clearAuthErrorStatusAction: () => dispatch(clearAuthErrorStatusAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationFormContainer(SignUp));
