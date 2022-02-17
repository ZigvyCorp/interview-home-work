import moment from "moment";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CommentArrcordion from "../CommentAccordion";
import Tag from "../Tag";
import "./style.scss";

function PostItem({ data, authors: users, comments }) {
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
    const author = users.find((author) => author.id === idUser);
    return author.name;
  };

  const renderDesc = (desc) => {
    if (desc.length <= 100) return desc;
    return desc.substring(0, 100) + "...";
  };

  const randomDate = () => {
    var startDate = new Date(2022, 2, 17).getTime();
    var endDate = new Date(2021, 1, 1).getTime();
    var spaces = endDate - startDate;
    var timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return moment(new Date(timestamp)).format("LL");
  };

  const { title, body, userId, id } = data;
  const postComments = comments.filter((comment) => comment.postId === id);

  return (
    <Row className="post-item">
      <h2>{title}</h2>
      <Col lg={4}>
        <div className="d-flex align-items-center">
          <ion-icon name="person-circle-outline"></ion-icon>
          {renderAuthor(userId)}
        </div>

        <div className="d-flex align-items-center">
          <ion-icon name="time-outline"></ion-icon>
          {randomDate()}
        </div>
      </Col>
      <Col lg={8}>
        <div className="tags">
          {tags.map((tagData, index) => (
            <Tag value={tagData} type={tagData} key={index} />
          ))}
          {/* <Tag value="test" type="magenta" /> */}
        </div>
      </Col>
      <Col lg={12}>
        <p>{renderDesc(body)}</p>
      </Col>
      <CommentArrcordion comments={postComments} users={users} />
    </Row>
  );
}

export default PostItem;
