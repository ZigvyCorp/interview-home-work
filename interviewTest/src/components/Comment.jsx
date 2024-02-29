import { Tooltip, Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
import { timeAgo } from "../utils/timeAgo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommentsStart } from "../redux/slices/commentSlice";

const CommentItem = ({ postId, id, creator, body, createdAt }) => {
  const actions = [<span key="comment-basic-reply-to">Reply to</span>];

  return (
    <div>
      <Comment
        actions={actions}
        author={
          <a className=" text-gray-700 font-medium ">{creator?.userName}</a>
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
          <Tooltip title={timeAgo(new Date(createdAt))}>
            <span>{timeAgo(new Date(createdAt))}</span>
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
