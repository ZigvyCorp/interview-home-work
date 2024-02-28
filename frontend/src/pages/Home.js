import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postActions } from '../store/post/postSlice';

import PostsList from '../components/PostsList';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.fetchPostList({ page: 1, limit: 10 }));
    }, [dispatch]);

    return (
        <PostsList />
    );
};

export default Home;