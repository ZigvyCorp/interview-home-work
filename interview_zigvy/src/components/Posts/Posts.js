import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import "./Posts.css";
import axios from "axios";
import Comments from "../Comments/Comments";
import Users from "../Users/Users";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(5);
  
  
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${page}`
    );
    setPosts(res.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop;
    const winHeight = window.innerHeight;
    const scrollHeight = e.target.documentElement.scrollHeight;
    if (winHeight + scrollTop + 1 >= scrollHeight) {
      setTimeout(() => {
        setPage((prev) => prev + 5);
      }, 1000);

      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div className="post">
    <Form className="search__bar me-auto">
            <Form.Control
              type="search"
              placeholder="Search Title..."
              className="search__input "
              
            />
           
          </Form>
      {posts.map((post, i) => {
        return (
      
          <Card key={i} className="post__form me-auto my-5 p-3">
            <Card.Body className="post__content me-auto">
              <Card.Title className="post__title">
                <h2>{post.title}</h2>
              </Card.Title>

              <div className="post__author">
                <Users id={post.userId} />
              </div>
              <div className="post__time">
                <h6>Created at: June 01, 2022</h6>
              </div>

              <Card.Text>{post.body}</Card.Text>

              <Comments id={post.id} />
            </Card.Body>
          </Card>
        );
      })}
      {loading && <h3 className="post__loading">Loading...</h3>}
    </div>
  );
}

export default Posts;
