import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/actions';
import { List, Pagination } from 'antd';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={post => (
                    <List.Item>
                        <h3>{post.title}</h3>
                        <p>{post.author} - {post.createdAt}</p>
                        <p>{post.content.substring(0, 100)}...</p>
                        <p>{post.comments.length} comments</p>
                    </List.Item>
                )}
            />
            {/* Pagination or Infinite Scroll */}
            <Pagination total={50} pageSize={10} onChange={page => dispatch(fetchPosts(page))} />
        </div>
    );
};

export default PostList;