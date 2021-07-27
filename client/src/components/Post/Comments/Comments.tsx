import { List, Tooltip, Comment } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { CommentType } from "../../../types";
import Editor from "./Editor";
import "./Comments.scss";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/actions/post.action";

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment().subtract(1, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design resources (Sketch and
        Axure), to help people create their product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment().subtract(2, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
];
interface Props {
  comments: CommentType[];
  id: string;
}
const Comments: React.FC<Props> = ({ comments, id }) => {
  const [showComments, setShowComments] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: any) => {
    dispatch(addComment(value, id));
  };

  return (
    <>
      <List
        className="comment-list"
        header={
          <div style={{ cursor: "pointer" }} onClick={() => setShowComments((prev) => !prev)}>
            {comments.length} replies
          </div>
        }
        style={{ width: "100%" }}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={
          showComments
            ? (item) => (
                <li>
                  <Comment
                    actions={[<span key="comment-reply">Reply to</span>]}
                    author={item.owner.name}
                    avatar={item.owner.avatar}
                    content={item.content}
                    datetime={
                      <Tooltip title={moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment(item.createdAt).fromNow()}</span>
                      </Tooltip>
                    }
                  />
                </li>
              )
            : (item) => ""
        }
      />
      {showComments && <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />}
    </>
  );
};

export default Comments;
