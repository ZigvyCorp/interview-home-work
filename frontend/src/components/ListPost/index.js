import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'antd';
import PostCard from '../PostCard';
import ButtonLoadMore from '../ButtonLoadMore';
import PostCardSkeleton from '../PostCard/PostCardSkeleton';

const ListPost = () => {

    const { posts, isFetching } = useSelector(state => state.post);

    return <Flex vertical gap="large" >
        {
            isFetching ? ([...Array(5)].map((_, index) => {
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