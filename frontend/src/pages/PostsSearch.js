import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { postActions } from '../store/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../components/PostCard';
import { Col, Row, Spin, Typography } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostsSearch = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const keyword = queryString.parse(location.search).q;

    useEffect(() => {
        dispatch(postActions.searchPosts({ page: 1, limit: 10, keyword }));
    }, [dispatch, keyword]);

    const { isLoading, postsSearch } = useSelector(state => state.post);
    const { list, page, limit, totalItems, totalPages } = postsSearch;

    const handleLoadMore = () => {
        dispatch(postActions.searchPosts({ page: page + 1, limit, keyword }));
    };

    if (isLoading && !list.length) {
        return <div style={{ textAlign: "center" }}>
            <Spin size="large" />
        </div>;
    }

    return (
        <>
            <Typography.Title level={5} style={{ textAlign: "center" }}>
                {`Found ${totalItems} results with "${keyword}"`}
            </Typography.Title>
            {
                list.length > 0 && <InfiniteScroll
                    dataLength={list.length}
                    next={handleLoadMore}
                    hasMore={page < totalPages}
                    loader={<div style={{ textAlign: "center", margin: "30px 0" }}>
                        <Spin />
                    </div>}
                    endMessage={
                        <p style={{ textAlign: "center", margin: "30px 0" }}>
                            <Typography.Text strong>You have seen it all!</Typography.Text>
                        </p>
                    }
                >
                    <Row gutter={[48, 0]}>
                        {
                            list.map(post => (
                                <Col span={24} key={post.id}>
                                    <PostCard post={post} />
                                </Col>
                            ))
                        }
                    </Row>
                </InfiniteScroll>
            }
        </>
    );
};

export default PostsSearch;