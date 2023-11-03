import React from "react";
import { Link, useParams } from "react-router-dom";
import { postActions, selectPostById, selectPostLoading } from "../postSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Accordion, Badge, Card, Spinner, Stack } from "react-bootstrap";
import { selectUserList } from "../../user/userSlice";
import { convertTime } from "../../../utils/convertTime";
import { shortenContent } from "../../../utils/shortenContent";
import CommentSection from "../components/CommentItem";
import { commentActions, selectCommentList } from "../../comment/commentSlice";

function PostDetail() {
  const { id } = useParams();
  const commentList = useAppSelector(selectCommentList);
  const userList = useAppSelector(selectUserList);
  const parsedComments = commentList.filter((comment) => {
    if (id !== undefined) {
      return comment.post === +id;
    }
  });
  const loading = useAppSelector(selectPostLoading);
  const post = useAppSelector(selectPostById);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (id !== undefined) {
      dispatch(postActions.fetchPostById(+id));
      dispatch(commentActions.fetchCommentList(+id));
    }
  }, [dispatch]);

  return (
    <div className="container mt-5">
      {loading ? (
        <Spinner animation="border" />
      ) : post ? (
        <>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Link to={`/post/${post.id}`}>
                <Card.Title>{post.title}</Card.Title>
              </Link>
              <div className="d-flex justify-content-between">
                <div className="information">
                  <div className="d-flex justify-content-around align-items-center">
                    <span>Author: </span>
                    <span>
                      {userList?.find((user: any) => user.id === post.owner)
                        ?.name || "No Name"}
                    </span>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <span>Created at: </span>
                    <span className=" m-2 p-2 text-justify">
                      {convertTime(post.created_at)}
                    </span>
                  </div>
                </div>
                <div className="tags">
                  <Stack direction="horizontal" gap={2}>
                    {post?.tags.map((tag: string, index) => (
                      <Badge key={index} bg="primary">
                        {tag}
                      </Badge>
                    ))}
                  </Stack>
                </div>
              </div>
              <Card.Text>{shortenContent(post.content)}</Card.Text>
              {loading ? (
                <Spinner animation="border" />
              ) : (
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {parsedComments?.length} replies
                    </Accordion.Header>
                    <Accordion.Body>
                      <CommentSection data={parsedComments} />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )}
            </Card.Body>
          </Card>
        </>
      ) : (
        <>Not Found</>
      )}
    </div>
  );
}

export default PostDetail;
