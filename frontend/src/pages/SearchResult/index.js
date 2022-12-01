import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Post from "../../components/post";
import postApi from "../../api/postApi";

function SearchResult() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywords, setKeywords] = useState("");
  useEffect(() => {
    let query = searchParams.get("query");
    setKeywords(query);
    const fetchData = async () => {
      const response = await postApi.getListPost(1,query);
      setPosts(response.posts);
    };
    fetchData();
  }, [keywords]);
  return (
    <Container>
      <h2>Search Results</h2>
      <Row>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Col key={index} xs={12} style={{ marginBottom: "2rem" }}>
              <Post data={post} />
            </Col>
          ))
        ) : (
          <h4>No posts found</h4>
        )}
      </Row>
    </Container>
  );
}

export default SearchResult;
