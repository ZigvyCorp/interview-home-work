import { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Collapse from "react-bootstrap/Collapse";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { ArrowRight } from "react-bootstrap-icons";
import { IComment } from "src/interfaces/comment";
import { getValidArray } from "src/utils/common";
import UserMockAvatar from "src/assets/images/fb-ava.jpg";
import "./style.css";
import { useDispatch } from "react-redux";
import { createCommentStart } from "src/store/reducers/comment";
import { DEFAULT_COMMENT_EMAIL, DEFAULT_COMMENT_NAME } from "./constants";

export interface ICommentSectionProps {
  comments: IComment[];
  isViewDetail: boolean;
  postId: number;
}

const CommentSection = (props: ICommentSectionProps) => {
  const { comments, isViewDetail, postId } = props;
  const commentList: IComment[] = getValidArray(comments);
  const countComment: number = commentList.length;
  const [isOpen, setIsOpen] = useState<boolean>(isViewDetail);
  const [comment, setComment] = useState<string>("");
  const dispatch = useDispatch();

  function onCommentChange(event: { target: { value: string } }) {
    setComment(event?.target?.value);
  }

  function commentPost() {
    if (comment) {
      dispatch(
        createCommentStart({
          name: DEFAULT_COMMENT_NAME,
          email: DEFAULT_COMMENT_EMAIL,
          body: comment,
          postId,
        })
      );
    }
    setComment("");
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="link"
        className="text-decoration-none px-0"
      >
        {`${countComment} ${countComment > 1 ? "replies" : "reply"}`}
      </Button>
      <hr className="mt-0" />
      <Collapse in={isOpen}>
        <Stack gap={4}>
          {commentList.map((comment: IComment) => {
            return (
              <Stack
                direction="horizontal"
                gap={2}
                className="align-items-start"
              >
                <Image
                  src={UserMockAvatar}
                  roundedCircle
                  width={32}
                  className="mt-2"
                />
                <div>
                  <p className="mb-1 text-secondary">{comment.name}</p>
                  <p className="my-0">{comment.body}</p>
                </div>
              </Stack>
            );
          })}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Place your comment..."
              onChange={onCommentChange}
              value={comment}
            />
            <InputGroup.Text className="submit-comment" onClick={commentPost}>
              <ArrowRight />
            </InputGroup.Text>
          </InputGroup>
        </Stack>
      </Collapse>
    </>
  );
};

export default CommentSection;
