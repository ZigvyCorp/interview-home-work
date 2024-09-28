import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Typography, List, Skeleton, Button, Modal, Form, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import PostCard from './PostCard';
import {
    fetchPostsRequest,
    setPage,
    createPostRequest,
} from '../redux/slices/postsSlice';

import { fetchCommentsApi } from '../api/postApi';

const { Content } = Layout;
const { Text, Title } = Typography;
const { TextArea } = Input;

const BlogLayout = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const loading = useSelector((state) => state.posts.loading);
    const hasMore = useSelector((state) => state.posts.hasMore);
    const page = useSelector((state) => state.posts.page);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [username, setUsername] = useState(localStorage.getItem('name') || '');
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const [visibleComments, setVisibleComments] = useState({});
    const [commentsData, setCommentsData] = useState({});

    useEffect(() => {
        dispatch(fetchPostsRequest({ page: 1, limit: 5, searchTerm: '', reset: true }));
    }, [dispatch]);

    const loadMoreData = () => {
        if (loading || !hasMore) return;
        const nextPage = page + 1;
        dispatch(setPage(nextPage));
        dispatch(fetchPostsRequest({ page: nextPage, limit: 5, searchTerm: '', reset: false }));
    };

    const handleSearch = (value) => {
        dispatch(setPage(1));
        dispatch(fetchPostsRequest({ page: 1, limit: 5, searchTerm: value, reset: true }));
    };

    const showCreatePostModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleCreatePost = (values) => {
        const postData = {
            owner: 1,
            title: values.title,
            content: values.content,
            tags: values.tags ? values.tags.split(',').map((tag) => tag.trim()) : [],
        };
        dispatch(createPostRequest(postData));
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setToken('');
        setUsername('');
    };

    const toggleComments = (postId) => {
        setVisibleComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
        if (!commentsData[postId]) {
            fetchComments(postId);
        }
    };

    const fetchComments = async (postId) => {
        try {
            const comments = await fetchCommentsApi(postId);
            setCommentsData((prev) => ({ ...prev, [postId]: comments }));
        } catch (error) {
            console.error('Error loading comments:', error);
        }
    };

    const getPostComments = (postId) => commentsData[postId] || [];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderComponent token={token} username={username} handleLogout={handleLogout} />
            <Content style={{ padding: '20px', width: '100%', margin: '0', backgroundColor: '#f0f2f5' }}>
                <SearchComponent handleSearch={handleSearch} />
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button type="primary" onClick={showCreatePostModal}>
                        Create new post
                    </Button>
                </div>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={loadMoreData}
                    hasMore={hasMore}
                    loader={<Skeleton paragraph={{ rows: 1 }} active />}
                    endMessage={<Text style={{ textAlign: 'center' }}>No more posts to show.</Text>}
                >
                    <List
                        itemLayout="vertical"
                        dataSource={posts}
                        renderItem={(post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                loading={loading}
                                visibleComments={visibleComments}
                                toggleComments={toggleComments}
                                getPostComments={getPostComments}
                            />
                        )}
                    />
                </InfiniteScroll>
            </Content>

            <Modal
                title="Create new post"
                open={isModalVisible}
                onCancel={handleCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            handleCreatePost(values);
                        })
                        .catch((info) => {
                            console.log('Validation Failed:', info);
                        });
                }}
            >
                <Form form={form} layout="vertical" name="create_post_form">
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please enter a title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[{ required: true, message: 'Please enter content!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name="tags" label="Tags (separated by commas)">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
};

export default BlogLayout;
