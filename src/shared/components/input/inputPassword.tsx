import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { commomStyledInput } from "./input.styled";
import { ShowPasswordGrayIcon, HidePasswordGrayIcon } from "./utils";
import { IPropsInput } from ".";

const Styled = styled(commomStyledInput)`
  border-radius: 5px;
  position: relative;
  height: 50px;
  .btn-hide-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    height: 15px;
    width: 18px;
    cursor: pointer;
  }
`;

const InputPassword = (props: IPropsInput) => {
  const [hide, setHide] = React.useState(true);
  const [focus, setFocus] = React.useState(false);
  const { _label = "", value = "", ...rest } = props;
  return (
    <Styled className={`input input-password ${focus ? "focusing" : ""}`}>
      <label className="label" htmlFor="">
        {_label}
      </label>
      <input
        type={`${hide ? "password" : "text"}`}
        maxLength={50}
        onFocus={e => {
          setFocus(true);
        }}
        onBlur={e => {
          if (value.trim().length === 0) {
            setFocus(false);
          }
        }}
        {...{ value, ...rest }}
      />
      <div className="btn-hide-password" onClick={() => setHide(!hide)}>
        <img
          src={!hide ? ShowPasswordGrayIcon() : HidePasswordGrayIcon()}
          alt=""
        />
      </div>
    </Styled>
  );
};

InputPassword.propTypes = {
  _label: PropTypes.string
};

export default InputPassword;
