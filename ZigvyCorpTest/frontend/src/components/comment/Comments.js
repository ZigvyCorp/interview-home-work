import { Avatar } from 'antd';
import { useState, useEffect } from 'react';
import './comments.scss';

function Comments({ arrComment, idPost }) {
    if (arrComment.length > 0) {
        const filteredComments = arrComment.filter((comment) => comment.post === idPost);
        console.log('filteredComments = ', filteredComments);
        // return filteredComments;
        if (filteredComments?.length > 0) {
            return filteredComments.map((item) => (
                <div className="wrap-comment" key={item._id}>
                    <div className="wrap-avatar">
                        <Avatar size={'large'} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                    <div>
                        <div className="wrap-name-time">
                            <p className="comment-user">{item.owner.name}</p>
                            <p className="comment-time">a day ago</p>
                        </div>
                        <p className="content-comment">{item.content}</p>
                        <div>
                            <p className="btn-replies">reply to</p>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return <>Không có bình luận</>;
        }
    }
}

export default Comments;
