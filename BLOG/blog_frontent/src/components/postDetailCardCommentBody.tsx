import { FC } from "react";
import { Button, Card } from "react-bootstrap"; 
import CommentSection from "./commentCard";
import { CommentType } from "types/commentType";

const PostDetailCardCommentBody: FC<{ commentItem: CommentType[] }> = ({ commentItem }) => (
  <Card.Body className="border-top">
    <div className="mb-3 mt-3 ">
      <label
        htmlFor="exampleFormControlTextarea1"
        className="form-label fw-bold"
      >
        Comment
      </label>
      <textarea
        className="form-control border-1 border-black"
        id="exampleFormControlTextarea1"
        rows={3}
      />
      <Button
        variant="dark"
        className="mt-3 mb-3"
        onClick={() => alert("Send Comment")}
      >
        Send
      </Button>{" "}
    </div>
    <CommentSection commentListItems={commentItem as CommentType[]} />
  </Card.Body>
);

export default PostDetailCardCommentBody;
