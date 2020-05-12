import React, { useState } from "react";
import BasicForm from "../utilities/BasicForm";
import Input from "../utilities/Input";
import Error from "../utilities/Error";
import SubmitButton from "../utilities/SubmitButton";
import validatePassword from "../utilities/validation/validatePassword";
import validateEmail from "../utilities/validation/validateEmail";
import errorMessages from "../utilities/validation/errorMessage";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !validatePassword(password) ||
      !validateEmail(email)
    ) {
      setErrorMessage(errorMessages.invalidCredential);
      return;
    }
    setErrorMessage("");
  };
  return (
    <BasicForm title="Zigvy Blog" subtitle="Sign up" onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Display Name"
        onChange={(value) => {
          setName(value);
        }}
      />
      <Input
        type="text"
        name="email"
        placeholder="Email"
        onChange={(value) => {
          setEmail(value);
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
      {errorMessage && <Error>{errorMessage}</Error>}
      <SubmitButton>Sign Up</SubmitButton>
      <Link to="/login">Already a member? Log in here!</Link>
    </BasicForm>
  );
};

export default SignUp;
