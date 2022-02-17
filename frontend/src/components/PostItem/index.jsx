import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CommentArrcordion from "../CommentAccordion";
import Tag from "../Tag";
import "./style.scss";

function PostItem({ data, authors }) {
  const tags = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  const renderAuthor = (idUser) => {
    const author = authors.find((author) => author.id === idUser);
    return author.name;
  };

  const renderDesc = (desc) => {
    if (desc.length <= 100) return desc;
    return desc.substring(0, 100) + "...";
  };

  const { title, body, userId } = data;
  return (
    <Row className="post-item">
      <h2>{title}</h2>
      <Col lg={6}>
        <p>Author: {renderAuthor(userId)}</p>
        <p>Created at: Sep 20, 2022</p>
      </Col>
      <Col lg={6}>
        <div className="tags">
          {tags.map((tagData) => (
            <Tag value={tagData} type={tagData} />
          ))}
          {/* <Tag value="test" type="magenta" /> */}
        </div>
      </Col>
      <Col lg={12}>
        <p>{renderDesc(body)}</p>
      </Col>
      <CommentArrcordion />
    </Row>
  );
}

export default PostItem;
