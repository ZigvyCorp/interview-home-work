
import './style.css';
import queryString from 'query-string';
import { Typography, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ListPost from '../../components/ListPost';
import { fetchingPost, getPosts } from '../../store/post/actions';

const PostsSearch = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { posts, isFetching } = useSelector(state => state.post);
    const { keyword } = queryString.parse(location.search);

    useEffect(() => {
        dispatch(fetchingPost());
        dispatch(getPosts({ currentPage: 1, perPage: 30, keyword }));
    }, [dispatch, keyword]);

    if (isFetching) {
        return <div className='spin'>
            <Spin size='large' />
        </div>;
    }

    return (
        <div className='posts__search'>
            <Typography.Title level={3} className='posts__search--title'>
                {`Found ${posts.list.length} results with "${keyword}"`}
            </Typography.Title>
            <ListPost />
        </div>
    );
};

export default PostsSearch;