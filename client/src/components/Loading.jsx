import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      className="d-flex justify-content-center m-auto my-5"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
