import React from 'react';
import { useSelector } from 'react-redux';
import PostDetail from '../components/PostDetail';

const PostDetailPage = ({ match }) => {
    const { id } = match.params;
    const post = useSelector(state => state.posts.posts.find(p => p.id === parseInt(id)));

    return (
        <div>
            {post ? <PostDetail post={post} /> : <p>Post not found</p>}
        </div>
    );
};

export default PostDetailPage;