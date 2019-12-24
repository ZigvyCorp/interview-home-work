import React from "react";
import styled from "styled-components";
import { breakpoints } from "src/shared/utils/styled";
import { InputText, InputPassword } from "src/shared/components/input";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { closeIcon } from "src/shared/assets";
import { useDispatch, useSelector } from "react-redux";
import { actionClosePopup } from "src/shared/popup/popup.actions";
import { ACTION_FETCH, ACTION_CLEAR_ALERT } from "./signin.constant";
import { signinSelector } from "./signin.selector";
import Alert from "src/shared/components/alert";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.sign-in {
    margin: 0 auto;
    min-width: ${breakpoints.xs};
    max-width: ${breakpoints.sm};
    border: solid 2px #fff;
    background: #2b2b2b;
    padding: 6% 2%;
    border-radius: 5px;
    width: 100%;
    .title {
      font-family: Roboto-Bold;
      font-size: 2vw;
      line-height: 2.5vw;
    }
    .close-popup {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 5%;
      right: 5%;
    }
    .btn {
      padding: 0 5%;
    }
    .group-btn {
      text-align: center;
      margin-top: 10%;
    }
  }
`;

const SignIn = (props: IProps) => {
  const {
    labelUsername,
    labelPassword,
    btnCancel,
    btnSubmit,
    title
  } = props.translate.signin;
  const { isFetching, error } = useSelector(signinSelector);
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    username: "",
    password: "",
    empty: true
  });
  const { username, password, empty } = form;
  const checkEmpty = () =>
    username.trim().length === 0 || password.trim().length === 0;
  const handleChangeInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value, empty: checkEmpty() });
    if (!!error.message) {
      dispatch({
        type: ACTION_CLEAR_ALERT
      });
    }
  };
  const handleClosePopup = () => dispatch(actionClosePopup());
  const handleSubmitForm = () => {
    if (empty) {
      return;
    }
    dispatch({
      type: ACTION_FETCH,
      payload: form
    });
  };
  const handleOnEnter = (e: any) =>
    e.key === "Enter" ? handleSubmitForm() : false;
  return (
    <Styled className="sign-in abs-center">
      <button className="close-popup" onClick={handleClosePopup}>
        <img src={closeIcon()} alt="" />
      </button>
      <form action="" onSubmit={(e: any) => e.preventDefault()}>
        <h4 className="title">{title}</h4>
        <InputText
          _label={labelUsername}
          value={username}
          onChange={handleChangeInput}
          name="username"
          onKeyPress={handleOnEnter}
        />
        <InputPassword
          _label={labelPassword}
          value={password}
          onChange={handleChangeInput}
          name="password"
          onKeyPress={handleOnEnter}
        />
        {!!error.message && <Alert type="error" content={error.message} />}
      </form>
      <div className="group-btn">
        <button className="btn" onClick={handleClosePopup}>
          {btnCancel}
        </button>
        <button
          className={`btn btn-submit ${empty ? "disabled" : ""}`}
          onClick={handleSubmitForm}
        >
          {`${btnSubmit}${isFetching ? "..." : ""}`}
        </button>
      </div>
    </Styled>
  );
};

export default withTranslate(SignIn);
