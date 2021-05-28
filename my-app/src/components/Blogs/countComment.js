import React, {  useState } from 'react';
import {useSelector} from 'react-redux'
import ListComment from '../Comments/listComment'

export default function CountComment(props){

    const [showComment, setShowComment] = useState(false);
    const Comments = useSelector((state) => state.comments)

    const getCommentofBlog = (id) => {
        let comments = undefined;
        if(Comments.data) {
            comments = Comments.data.filter(item => item.postId === id);
        }
        return comments;
    }

    if(Comments.data) 
        return(
            <div className='comment-containter'>
                <a  onClick={() => setShowComment(!showComment)}>
                    {getCommentofBlog(props.id).length} replies
                </a>
                <ListComment data={getCommentofBlog(props.id)} visiable={showComment}/>
            </div>
        )
    else return null;
}