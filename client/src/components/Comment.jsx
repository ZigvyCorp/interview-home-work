import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Nav } from "react-bootstrap";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import formatDate from "../utils/formatDate";
import { fetchUserRequest } from "../features/users/actions";

const Comment = ({ postId, comments }) => {
  const [parent] = useAutoAnimate();
  const dispatch = useDispatch();
  const [commentsById, setCommentsById] = useState([]);
  useEffect(() => {}, [dispatch]);
  useEffect(() => {
    if (!comments) {
      return;
    }
    const array = comments?.filter((comment) => comment.post === postId);
    setCommentsById(array);
  }, [postId, comments]);

  useEffect(() => {
    dispatch(fetchUserRequest("users"));
  }, [dispatch]);

  const { data: users } = useSelector((state) => state.user) ?? [];
  const getAuthorName = (id) => {
    const user = users?.find((user) => user.id === id);
    return user ? user.name : "Unknown Author";
  };
  return (
    <div ref={parent}>
      {commentsById?.map((comment) => (
        <Card key={comment.id} className="mb-2" border="0">
          <Card.Body className="d-flex">
            <Image
              src="avatar.jpg"
              alt="User Avatar"
              roundedCircle
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <Card.Title className="d-flex ">
                <span className=" opacity-75">
                  {getAuthorName(comment.owner)}
                </span>
                <span
                  className="mx-3 my-1 fw-normal opacity-50"
                  style={{ fontSize: "13px" }}
                >
                  {formatDate(comment.createdAt)}
                </span>
              </Card.Title>
              <Card.Text>{comment.content}</Card.Text>
              <Nav.Link className="opacity-75" style={{ fontSize: "13px" }}>
                Reply to
              </Nav.Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Comment;
