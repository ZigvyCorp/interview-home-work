import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Col, Row, Spin, Typography } from 'antd';
import PostCard from './PostCard';
import SkeletonPostCard from './SkeletonPostCard';
import InfiniteScroll from "react-infinite-scroll-component";

import { postActions } from '../store/post/postSlice';

const PostsList = () => {
    const dispatch = useDispatch();

    const { isLoading, postList } = useSelector(state => state.post);
    const { list, page, limit, totalPages } = postList;

    const handleLoadMore = () => {
        dispatch(postActions.fetchPostList({ page: page + 1, limit }));
    };

    if (!list.length && isLoading) {
        return <SkeletonPostCard />;
    }

    if (!list) {
        return <Typography.Text strong style={{ textAlign: "center" }}>
            No post to display!
        </Typography.Text>;
    }

    return (

        <InfiniteScroll
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

    );
};

export default PostsList;