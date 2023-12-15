import { FC, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "types/postType";
import { CommentType } from "types/commentType";
import { PostDetailCardCommentBody, PostDetailCardMainBody } from "components";
import { selectPost } from "../../redux/reducers/postReducer";
import { getPost } from "../../redux/actions/postActions";


const DetailPostPage: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const postItem: PostType | null = useSelector(selectPost);

  useEffect(() => {
    dispatch(getPost({ postId: postId as string }));
  }, [dispatch]);

  return (
    <div>
      {postItem && (
        <Container className="d-flex justify-content-center ">
          <Row className="w-100">
            <Col>
              <section className="py-4 container">
                <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4 w-100">
                  <div className="card p-0 overflow-hidden shadow-sm">
                    <PostDetailCardMainBody postItem={postItem} />
                    <PostDetailCardCommentBody
                      commentItem={postItem.comments as CommentType[]}
                    />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default DetailPostPage;
