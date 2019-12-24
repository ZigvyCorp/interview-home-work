import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { commomStyledInput } from "./input.styled";
import { IPropsInput } from ".";

const Styled = styled(commomStyledInput)`
  border-radius: 5px;
  position: relative;
  height: 50px;
`;

const InputText = (props: IPropsInput) => {
  const [focus, setFocus] = React.useState(false);
  const { _label = "", value = "", ...rest } = props;
  return (
    <Styled className={`input input-text ${focus ? "focusing" : ""}`}>
      <label className="label" htmlFor="">
        {_label}
      </label>
      <input
        type="text"
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
    </Styled>
  );
};

InputText.propTypes = {
  _label: PropTypes.string
};

export default InputText;
