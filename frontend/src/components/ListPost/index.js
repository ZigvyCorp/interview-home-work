
import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'antd';
import PostCard from '../PostCard';
import PostCardSkeleton from '../PostCard/PostCardSkeleton';
import ButtonLoadMore from '../ButtonLoadMore';

const ListPost = () => {

    const { posts } = useSelector(state => state.post);

    return <Flex vertical gap="large" >
        {
            !posts.list.length ? ([...Array(5)].map((_, index) => {
                return <PostCardSkeleton key={index} />;
            })) : (
                posts?.list?.map((post, index) => {
                    return <PostCard post={post} key={index} />;
                })
            )
        }
        <ButtonLoadMore />
    </Flex>;
};

export default ListPost;