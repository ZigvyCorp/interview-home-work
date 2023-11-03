import "./commentItem.styles.css";

type CommentItemProps = {
  handleReplyTo: () => void;
};
function CommentItem({ handleReplyTo }: CommentItemProps) {
  return (
    <div className="comment-container">
      <div className="author-comment-header">
        <img
          src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
          alt="Description of the image"
          width="40" // You can specify the width and height here
          height="40"
        />
        <div className="author-comment-name">Han Solo</div>
        <div className="comment-time">a day ago</div>
      </div>
      <div className="comment-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        veritatis nulla accusamus facilis fuga dignissimos iure, earum, error
        voluptas tempora dolores nemo, facere adipisci? Dolores dignissimos
        perferendis nihil quo earum.
      </div>
      <div className="button-reply-comment" onClick={handleReplyTo}>
        Reply to
      </div>
    </div>
  );
}

export default CommentItem;
