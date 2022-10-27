import React, {useState} from "react";
import { Avatar, Comment, Row } from 'antd';

import './styles.scss';
const CommentPost = (props) => {
    
    const {dataComment, itemPost} = props;
    const [isCollapse, setCollapse] = useState(false);
    const getCommentPost = () => {
        const listComment = dataComment?.filter(item => item?.postId === itemPost?.id);
        return listComment;
    }
    const listComment = getCommentPost();

    const collapseComment = () => {
        setCollapse(!isCollapse);
    }
    return (
       <div className="comment">
            <Row className="total-replies" onClick={collapseComment}>{listComment?.length} Replies</Row>
            <Row className="list-comment">
                {
                    listComment?.map((item) => (
                        <Comment
                            className={!isCollapse? 'collapse': 'expand'}
                            actions={[<span key="comment-basic-reply-to">Reply to</span>]}
                            author={<a>{item.name}</a>}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                            <Row>
                                {item.body}
                            </Row>
                            }
                            datetime={
                                <span>8 hours ago</span>
                            }
                        />
                    ))
                }
            </Row>
       </div>
    )
}

export default CommentPost;