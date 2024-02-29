import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPostsRequest } from '../../Services/postAction';
import PostItem from '../PostItem/PostItem';
import { Button, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
function PostList({ loading, posts, error, hasNextPage, fetchPosts }) {

    const [page, setPage] = useState(1);
    useEffect(() => {
        if (hasNextPage)
            fetchPosts(page); // Gọi action fetchPostsRequest khi component được render  
    }, [page, fetchPosts]);
    const handleLoadMoreComment = () => {
        if (hasNextPage) {
            setPage(page + 1)
        }
    }

    return (
        <div style={{
            padding: "0px 25px",
        }}>
            {
                posts?.length > 0 && posts ? posts?.map((post, index) => (
                    <PostItem key={index} data={post} />
                )) : null
            }
            {
                hasNextPage &&
                <Flex justify='center' style={{ marginTop: 10 }}>
                    {
                        loading ?
                            <Spin indicator={
                                <LoadingOutlined style={{
                                    fontSize: 24,
                                }} spin />
                            } /> :
                            <Button type='text' onClick={handleLoadMoreComment}  >Load more</Button>
                    }
                </Flex>
            }


        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.data,
    error: state.posts.error,
    hasNextPage: state.posts.hasNextPage,
});

const mapDispatchToProps = {
    fetchPosts: fetchPostsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);