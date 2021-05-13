import React from "react";
import { Link } from "react-router-dom";

import { Button, Row } from "antd";

const Error = () => {
  return (
    <section className="page">
      <div className="container">
        <Row justify="center">
          <h1>Opps! Errors</h1>
        </Row>
        <Row justify="center">
          <Link to="/" className="btn btn-primary">
            <Button type="primary">Back to home page</Button>
          </Link>
        </Row>
      </div>
    </section>
  );
};

export default Error;
