import { Button, Comment, List, Tooltip } from "antd";
import { useState } from "react";
import { getCommentsFromPost } from "../../services/post/post.api";
import moment from "moment";

const CommentCustom = ({ postID, numComment }) => {
    const [data, setData] = useState([]);

    const showComments = async () => {
        let comments = (await getCommentsFromPost(postID)).data.comments;
        console.log(comments);
        comments = comments.map((comment) => {
            return {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: comment.owner.username, // todo 1
                avatar: "https://joeschmoe.io/api/v1/random",
                content: <p>{comment.content}</p>,
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(comment.createdAt, "days")
                            .format("YYYY-MM-DD HH:mm:ss")}
                    >
                        <span>
                            {moment()
                                .subtract(comment.createdAt, "days")
                                .fromNow()}
                        </span>
                    </Tooltip>
                ),
            };
        });
        setData(comments);
    };

    return (
        <>
            <Button type="link" onClick={showComments}>
                {numComment} replies
            </Button>
            <hr style={{ height: "1px", opacity: "0.5", margin: "8px 0" }} />
            {data.map((item) => (
                <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                />
            ))}
        </>
    );
};

export default CommentCustom;
