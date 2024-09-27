import moment from "moment";
import { Button, Divider } from "antd";
import React from "react";

const PostComment = ( { comments }) => {
    return (
        <>
            {comments.map(( comment ) =>
                <div key={comment.id} className="comment-container">
                    <div className="comment-meta">
                        <p>{comment.email}</p>
                        <p>{moment(new Date(comment.createdAt)).fromNow()}</p>
                    </div>
                    <div className="comment-body">
                        <p>{comment.body}</p>
                    </div>
                    <Button color="primary" variant="outlined">Reply to</Button>
                    <Divider style={{ userSelect: "none" }}/>
                </div>
            )}
        </>
    )
}

export default PostComment;