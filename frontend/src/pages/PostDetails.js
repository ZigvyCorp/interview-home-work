import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../store/post/postSlice';

import PageNotFound from './PageNotFound';
import PostCard from '../components/PostCard';
import SkeletonPostCard from '../components/SkeletonPostCard';

const PostDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, post } = useSelector(state => state.post);

    useEffect(() => {
        dispatch(postActions.fetchPost(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <SkeletonPostCard />;
    }

    if (!isLoading && !post) {
        return <PageNotFound />;
    }

    return (
        <PostCard
            isDetails
            post={post}
        />
    );
};

export default PostDetails;