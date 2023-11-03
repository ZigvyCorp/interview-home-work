import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Typography } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { searchPostByKeyword } from '../../services/searchPostThunk';
import PostItem from '~/features/posts/components/PostItem/PostItem';

export default function SearchPost() {
    const [keyword, setKeyword] = useState('');
    const dispatch = useAppDispatch();
    const { selectedPost, searchStatus } = useAppSelector((state) => state.search);

    const handleFindPostByKeyword = () => {
        dispatch(searchPostByKeyword(keyword));
    };

    return (
        <Flex vertical>
            <Typography.Title level={2}>Search Post</Typography.Title>
            <Flex>
                <Input
                    placeholder='Search a post based on title'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <Button type='primary' icon={<SearchOutlined />} onClick={handleFindPostByKeyword}>
                    Search
                </Button>
            </Flex>
            {searchStatus === 'success' && selectedPost ? (
                <PostItem postItem={selectedPost} />
            ) : null}
        </Flex>
    );
}
