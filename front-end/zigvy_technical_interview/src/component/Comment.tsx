import moment from "moment";

interface CommentCard {
  content: string;
  name: string;
}
const Comments = ({ content, name }: CommentCard) => {
  const createDate = moment("2023-10-01");
  const nowDate = moment();
  const diffInDay = nowDate.diff(createDate, "days");
  return (
    <div className="d-flex flex-row mx-3">
      <div style={{ marginRight: "30px" }}>
        <img
          className="rounded-circle"
          src="https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait.png"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p style={{ marginLeft: "30px", color: "grey" }}>
            {diffInDay} day ago
          </p>
        </div>
        <p>{content}</p>
        <p style={{ cursor: "pointer", color: "grey" }}>Reply to</p>
      </div>
    </div>
  );
};

export default Comments;
