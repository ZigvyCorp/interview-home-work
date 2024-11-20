import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "./redux/useSlice";
import Comment from "./Comment";
import User from "./User";
function Feed() {
  const blog_url = "https://jsonplaceholder.typicode.com/posts";
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul style={{ marginBottom: "70px" }}>
      {items.map((item) => {
        const { userId, id, title, body } = item;
        return (
          <Post key={id} userId={userId} id={id} title={title} body={body} />
        );
      })}
    </ul>
  );
}

function Post({ userId, id, title, body }) {
  const userData = useSelector((state) => state.user.userData);

  return (
    <Container>
      <Card
        as={Link}
        to={`/post/${id}`}
        className="m-3 text-decoration-none text-dark"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <Card.Body>
          <Card.Title
            className="text-center font-weight-bold"
            style={{ fontSize: "35px" }}
          >
            {title}
          </Card.Title>
          <User id={userId} />
          <Card.Subtitle className="text-left">
            {`Created at: 1576506719083`}
          </Card.Subtitle>
          <Card.Text
            className="text-center text-truncate"
            style={{ fontSize: "30px" }}
          >
            {body}
          </Card.Text>
        </Card.Body>
        <Comment postId={id} />
      </Card>
    </Container>
  );
}

export default Feed;
