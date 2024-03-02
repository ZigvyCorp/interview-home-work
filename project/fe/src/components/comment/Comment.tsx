import { Button } from "antd";
import { useEffect, useState } from "react";
import { CommentInput } from "./CommentInput";
import CommentTree from "./CommentTree";
import { getApi } from "../../utils/fetch";

const Comment = ({ blogid }: { blogid: string }) => {
  const [show, setShow] = useState<boolean>(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComment = async () => {
      try {
        return await getApi(`/api/comments/blog/${blogid}`).then((res) =>
          setComments(res.comments)
        );
      } catch (error) {
        alert(error);
      }
    };
    getComment();
  }, [blogid]);

  return (
    <>
      <Button
        type="text"
        onClick={() => setShow(!show)}
        style={{ marginLeft: 20 }}
      >
        {comments.length} comments
      </Button>
      <hr />
      <CommentInput />
      <div style={{ height: 20 }} />
      {show && <CommentTree comment={comments} />}
    </>
  );
};

export default Comment;
