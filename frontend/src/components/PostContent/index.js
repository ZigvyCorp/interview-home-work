import React from 'react'
import { PostAuthor } from '../PostAuthor'
import CommentSection from '../../containers/CommentSection'
import getShortString from '../../utils/getShortString'
import { Link } from 'react-router-dom'
import './PostContent.css'

const PostContent = ({ post, isPostDetail }) => {
    return (
        <div className='post-item'>
            <div className='post-header' >
                <Link className='post-title' to={`/posts/${post.id}`}>{post?.title}</Link>
            </div>
            <PostAuthor userId={post?.userId} createdAt={post?.createdAt} />
            <p>{isPostDetail ? post?.body : getShortString(post?.body)}</p>
            <CommentSection postId={post.id} />
        </div>
    )
}

export default PostContent