import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";
import { Post } from "../../../models/post";
import { convertTime } from "../../../utils/convertTime";
import { shortenContent } from "../../../utils/shortenContent";
import { Link } from "react-router-dom";
import {
  commentActions,
  selectCommentList,
  selectCommentLoading,
} from "../../comment/commentSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CommentItem from "./CommentItem";
import { selectUserList } from "../../user/userSlice";

function PostItem({ post }: { post: Post }) {
  const userList = useAppSelector(selectUserList);
  const commentList = useAppSelector(selectCommentList);
  const parsedComments = commentList.filter(
    (comment) => comment.post == post.id
  );
  const loading = useAppSelector(selectCommentLoading);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(commentActions.fetchCommentList(post.id));
  }, [dispatch, post.id]);

  return (
    <div className="container mt-5">
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
                <span className="text-justify m-2 p-2">
                  {convertTime(post.created_at)}x
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
                  <CommentItem data={parsedComments} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostItem;
