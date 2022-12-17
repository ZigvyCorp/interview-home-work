import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentItem from './CommentItem';

const CommentList = ({ postId, authorName }) => {
    const comment = useSelector(state => state.CommentReducer.comment.filter(f => f.post === postId));
    const linkCollapse = "#" + authorName.replace(/\s/g, '') +postId;
    const linkAuthor =  authorName.replace(/\s/g, '') +postId;
    return (

        <div className="post-comment mt-3">
            <p>
                <Link className="text-decoration-none text-secondary" data-bs-toggle="collapse" to={linkCollapse}>{comment.length} replies
                </Link>
            </p>
            <div className="collapse mb-3" id={linkAuthor}>
                <div className="card card-body">
                    <div className='d-flex gap-4 flex-column'>
                        {comment.map((item, index) => {
                            return <CommentItem data={item} key={index} />
                        }
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommentList;