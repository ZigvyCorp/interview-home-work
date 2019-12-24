import React from "react";
import { useSelector } from "react-redux";
import { translateSelector } from "../selectors";

export default () => {
  const translate = useSelector(translateSelector);
  return [translate];
};
