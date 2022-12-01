import moment from "moment";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import postApi from "../../api/postApi";
import Comment from "../../components/comment";
import Tag from "../../components/tag";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await postApi.getPostById(postId);
      // const commentsData = await getCommentsOfPost(id);
      setPost(response.post);
      // setComments(commentsData.data);
      console.log(response.post);
    };
    fetchData();
  }, [postId]);

  return (
    <Container>
      <h1 className="text-center mb-4">{post.title}</h1>
      <Row>
        <Col xs={8}>
          <h3>Author: {post.owner?.name}</h3>
          <h3>{moment(post.createdAt).format("DD/MM/YYYY")}</h3>
        </Col>
        <Col xs={4}>
          {post.tags?.length > 0 &&
            post.tags.map((tag, index) => <Tag key={index} tagName={tag} />)}
        </Col>
      </Row>
      <p className="mt-4 fs-4">{post.content}</p>
      <small className="text-muted me-2">{post.countComment} relies</small>
      <Comment />
    </Container>
  );
}

export default PostDetail;
