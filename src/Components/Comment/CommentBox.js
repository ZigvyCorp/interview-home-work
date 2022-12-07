import Comment from "./Comments";

function CommentBox({ postId }) {
  return (
    <div>
      <Comment postId={postId} />
    </div>
  );
}

export default CommentBox;
