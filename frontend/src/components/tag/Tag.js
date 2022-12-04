import React from "react";
import { Button } from "react-bootstrap";

const variants = [
  "outline-primary",
  "outline-secondary",
  "outline-success",
  "outline-warning",
  "outline-danger",
  "outline-info",
  "outline-light",
  "outline-dark",
];

function Tag(props) {
  return <Button variant={Math.floor(Math.random() * variants.length)}>{props.tagName}</Button>;
}

export default Tag;
