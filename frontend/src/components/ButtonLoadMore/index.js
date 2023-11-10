
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getPosts, loadMorePost } from '../../store/post/actions';

const ButtonLoadMore = () => {

    const dispatch = useDispatch();

    const { posts, isLoadMore } = useSelector(state => state.post);

    const { currentPage, totalPages, perPage } = posts;
    const hasMorePosts = currentPage < totalPages;

    const handleLoadMore = () => {
        dispatch(loadMorePost());
        dispatch(getPosts({ currentPage: currentPage + 1, perPage }));
    };

    if (hasMorePosts) {
        return (
            <Button type='primary' onClick={handleLoadMore} loading={isLoadMore}>Load more</Button>
        );
    }

    return null;
};

export default ButtonLoadMore;