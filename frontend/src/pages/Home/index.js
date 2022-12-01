import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Post from "../../components/post";
import { POST_FETCH } from "../../redux/types/postType";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const postState = useSelector((state) => state.post);
  const { listPosts, loading } = postState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: POST_FETCH
    });
  }, [dispatch]);

  return (
    <Container>
      <h2>My Blog</h2>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {listPosts.length > 0 ? (
            postState.listPosts.map((post, index) => (
              <Col key={index} xs={12} style={{ marginBottom: "2rem" }}>
                <Post data={post} />
              </Col>
            ))
          ) : (
            <h4>Can't get post from server</h4>
          )}
        </Row>
      )}
      <Pagination>
        {/* <Pagination.Prev onClick={handleBackPage}/>
    <Pagination.Next onClick={handleNextPage}/> */}
      </Pagination>
    </Container>
  );
}

export default Home;
