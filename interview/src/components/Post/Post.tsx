import React, { useEffect, useState } from "react";
import "./post.css";
import { formatDate } from "../../ultis/tagData";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { Comment as CommentModel } from "../../common/models/comment";
import { getComment } from "../../common/actions/comment";
import { User } from "../../common/models/user";


type Props = {
  id: number;
  title: string;
  authorId: number;
  content: string;
  comments: CommentModel[];
  user: User;
  tags: string[];
  onClick?: Function;
};

const Post: React.FC<Props> = ({
  title,
  authorId,
  id,
  content,
  tags,
  comments,
  user,
  onClick,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment(id));
  }, []);

  const currentDate: Date = new Date();
  const formattedDate = formatDate(currentDate);

  const [showComment, setShowComment] = useState(false);

  const handleToggleComment = () => {
    setShowComment(!showComment);
  };

  return (
    <div className="card mb-4 my-4">
      <div onClick={() => onClick && onClick(id)} className="h2 text-center ">
        {title}
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between flex-wrap align-content-center ">
          <h2 className="card-subtitle mb-2  w-75 ">
            Author: {user.name} <br />
            Created at: {formattedDate}
          </h2>
          <div className="tags d-flex flex-wrap align-content-center gap-3 w-25">
            {tags.map((tag, index) => (
              <div key={index} className={`tag tag-${tag}`}>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-text">{content}</div>
      </div>
      <div className="comment pointer">
        {/* Sử dụng onClick để gọi hàm xử lý sự kiện click */}
        <div className="reply">
          <span onClick={handleToggleComment} role="button">
            {comments.length} replies
          </span>
        </div>
        {/* Hiển thị phần comment dựa vào trạng thái của state */}
        {showComment &&
          comments.map((comment: CommentModel) => {
            return (
              <Comment
                key={comment.id}
                author={comment.email}
                date={15}
                content={comment.body}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Post;
