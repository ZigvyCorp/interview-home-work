import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Comment from "./Comment";
import { fetchPostRequest } from "../features/posts/actions";
import { fetchUserRequest } from "../features/users/actions";
import { fetchCommentRequest } from "../features/comments/actions";
import formatDate from "../utils/formatDate";
import Pagination from "./Pagination";
import Loading from "./Loading";

const Post = () => {
  const [parent] = useAutoAnimate();
  const [isOpen, setIsOpen] = useState({
    open: false,
    postId: "",
  });
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useSelector((state) => state.post) ?? [];
  const { data: users } = useSelector((state) => state.user) ?? [];
  const { data: comments } = useSelector((state) => state.comment) ?? [];
  const { data: searchItem } = useSelector((state) => state.searchItem) ?? [];
  useEffect(() => {
    dispatch(fetchPostRequest("posts"));
    dispatch(fetchUserRequest("users"));
    dispatch(fetchCommentRequest("comments"));
  }, [dispatch]);
  const getAuthorName = (id) => {
    const user = users?.find((user) => user.id === id);
    return user ? user.name : "Unknown Author";
  };
  const hanleClickComment = (postId) => {
    setIsOpen((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  const getCommentCount = (postId) => {
    const getCount = comments?.filter((c) => c.post === postId);
    return getCount ? getCount.length : 0;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = posts?.slice(indexOfFirstItem, indexOfLastItem);
  let displayPosts = !searchItem ? currentPosts : searchItem;

  const navigate = useNavigate();
  const handleNavigatePostDetail = (post) => {
    navigate("/postDetail", { state: { post: post } });
  };
  return (
    <div ref={parent}>
      {isLoading ? (
        <Loading />
      ) : displayPosts?.length !== 0 ? (
        displayPosts?.map((post) => (
          <Container className="d-flex flex-column" key={post.id} ref={parent}>
            <Nav.Link onClick={() => handleNavigatePostDetail(post)}>
              <Row className="d-flex text-center mt-3 fw-bold">
                <h2>{post.title}</h2>
              </Row>
              <Row>
                <Col className="fw-medium">
                  Author: {getAuthorName(post.owner)}
                </Col>
              </Row>
              <Row>
                <Col className="fw-medium">
                  Created at: {formatDate(post.createdAt)}
                </Col>
              </Row>
              <Row>
                <Container className="truncated-text fw-medium">
                  {post.content}
                </Container>
              </Row>
            </Nav.Link>
            <Row>
              <Nav.Link
                className="text-secondary mt-2 mx-3 d-block"
                onClick={() => hanleClickComment(post.id)}
              >
                {getCommentCount(post.id)} replies
              </Nav.Link>
            </Row>
            <hr />
            {isOpen[post.id] && (
              <Comment comments={comments} postId={post.id} />
            )}
          </Container>
        ))
      ) : (
        <span className="d-flex justify-content-center">No Data</span>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={posts?.length}
        paginate={handlePaginate}
      />
    </div>
  );
};

export default Post;
