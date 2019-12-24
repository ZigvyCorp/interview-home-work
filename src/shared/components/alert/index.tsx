import React from "react";
import { alertIcon, checkedIcon } from "src/shared/assets";
import Styled from "./alert.styled";
import PropTypes from "prop-types";

interface IProps {
  content: string;
  type: string;
  animation?: string;
}

const Alert = (props: IProps) => {
  const { content, type, animation = "fade" } = props;
  return (
    <Styled className={`alert ${type} ${animation}`}>
      <div className="notice">
        <img
          alt="notice"
          src={type === "error" ? alertIcon() : checkedIcon()}
        />
      </div>
      <p className="content">{content}</p>
    </Styled>
  );
};

Alert.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Alert;
