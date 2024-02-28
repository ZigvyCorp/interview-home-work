import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsRequest } from '../../Services/postAction';
import PostItem from '../PostItem/PostItem';

function PostList({ loading, posts, error, fetchPosts }) {
    useEffect(() => {
        fetchPosts(); // Gọi action fetchPostsRequest khi component được render

    }, [fetchPosts]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly"
        }}>
            {
                console.log(posts)
            }
            <PostItem />
            <PostItem />
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.data,
    error: state.posts.error,
});

const mapDispatchToProps = {
    fetchPosts: fetchPostsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);