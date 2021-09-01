import React, {useState, useEffect }  from 'react';
import { getComments } from '../../redux/reducers/comments';
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from "antd";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Comment = (props) => {
    const [open, setOpen] = useState(false);

    const dispatchComment = useDispatch();
    const { id } = props;

    useEffect(() => {
        dispatchComment(getComments());
    }, [dispatchComment]);

    const comments = useSelector((state) => state.comments.comments);

    // count number of post comment
    let count = 0;
    for(let i = 0; i < comments.length; ++i){
        if(comments[i].postId == id)
            count = count + 1;
    }

    //change status of collapse
    function handleClick() {
        setOpen(!open);
        console.log(open)
    }

    return (
        <div className="comments" onClick={handleClick}>
            <Collapse >
                <Panel showArrow={false} header={`Number of comments: ${count}`} >
                    {open === false ? (
                        <p></p>
                    ): (
                        <div className="comment-content">
                        {comments.map(comment => {
                            if(comment.postId === id){
                                return(
                                    <div className="a-comment">
                                        <div className="a-comment-ava">
                                            <p>{comment.email}</p>
                                            <Avatar shape="square" size={32} icon={<UserOutlined />}/>
                                        </div>
                                        <p>{comment.body}</p>
                                    </div>
                                )
                            }
                        })}
                        </div>
                    )}
                </Panel>
            </Collapse> 
        </div>
    );
};

export default Comment;