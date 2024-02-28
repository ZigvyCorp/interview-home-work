import { Tooltip, Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
import { timeAgo } from "../utils/timeAgo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommentsStart } from "../redux/slices/commentSlice";

const CommentItem = ({ postId, id, name, email, body }) => {
  const actions = [<span key="comment-basic-reply-to">Reply to</span>];
  const time = new Date("2024-02-28T08:00:00");

  return (
    <div>
      <Comment
        actions={actions}
        author={
          <a className=" text-gray-700 font-medium ">{email?.split("@")[0]}</a>
        }
        avatar={
          <Avatar
            src={
              "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg"
            }
            alt="Han Solo"
          />
        }
        content={<p className=" text-gray-700 font-medium">{body}</p>}
        datetime={
          <Tooltip title={timeAgo(time)}>
            <span>{timeAgo(time)}</span>
          </Tooltip>
        }
      />
    </div>
  );
};
const CommentItemList = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getCommentsStart({ postId }));
  }, []);

  return (
    <div>
      {comments?.map((el, index) => (
        <CommentItem key={index} {...el} />
      ))}
    </div>
  );
};
export default CommentItemList;
