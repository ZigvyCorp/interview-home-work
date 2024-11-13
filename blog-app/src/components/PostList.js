import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { fetchComments } from '../redux/actions/commentActions';
import { Pagination } from 'antd';
import { Card, Collapse } from 'react-bootstrap';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './contexts/UserContext';
import Login from './Login';
import NewPost from './NewPost';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, totalPosts, loading } = useSelector((state) => state.post);
    const { comments, loadingComments } = useSelector((state) => state.comment);
    const [showComments, setShowComments] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [newComment, setNewComment] = useState('');

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showNewPostModal, setshowNewPostModal] = useState(false)
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (searchQuery.trim()) {
            const response = await axios.get(`http://172.20.10.4:3000/api/posts/search?q=${searchQuery}`);
            setSearchResults(response.data);
        } else {
            setSearchResults([]);
        }
    };

    const tagStyles = [
        { backgroundColor: '#eb2f96', borderColor: '#c41d7f', color: '#fff' },
        { backgroundColor: '#f5222d', borderColor: '#cf1322', color: '#fff' },
        { backgroundColor: '#fa541c', borderColor: '#d4380d', color: '#fff' },
        { backgroundColor: '#fa8c16', borderColor: '#d46b08', color: '#fff' },
        { backgroundColor: '#a0d911', borderColor: '#7cb305', color: '#000' },
        { backgroundColor: '#52c41a', borderColor: '#389e0d', color: '#fff' },
        { backgroundColor: '#13c2c2', borderColor: '#08979c', color: '#fff' },
        { backgroundColor: '#1890ff', borderColor: '#096dd9', color: '#fff' },
        { backgroundColor: '#722ed1', borderColor: '#531dab', color: '#fff' },
        { backgroundColor: '#faad14', borderColor: '#d48806', color: '#000' },
    ];

    const getRandomTagStyle = () => {
        const randomIndex = Math.floor(Math.random() * tagStyles.length);
        return tagStyles[randomIndex];
    };

    useEffect(() => {
        dispatch(fetchPosts(currentPage, postsPerPage));
        dispatch(fetchComments());
    }, [dispatch, currentPage, postsPerPage, showNewPostModal]);

    const toggleComments = (postId) => {
        setShowComments((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const handleCommentSubmit = async (postId) => {
        try {
            if (!newComment.trim()) return;
            const response = await axios.post(`http://172.20.10.4:3000/api/comments`, {
                content: newComment,
                owner: user.id,
                post: postId
            });
            setNewComment('');
            dispatch(fetchComments());
        } catch (error) {
            console.error('Failed to submit comment:', error);
        }
    };

    const handlePostsPerPageChange = (event) => {
        setPostsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    if (loading || loadingComments) return <p>Loading...</p>;

    const displayPosts = searchResults.length > 0 ? searchResults : posts;

    return (
        <div className="container">
            <div className="mt-3">
                <button className="add-post-button"  onClick={() => setshowNewPostModal(true)} variant="link">
                    Add New Your Post
                </button>
            </div>

            <div className="search-bar mb-3">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Search on Enter key press
                    className="form-control"
                />
            </div>

            {/* Display filtered posts */}
            {displayPosts.map((post) => (
                <Card key={post._id} className="post-card">
                    <Card.Body>
                        <div className="post-header">
                            <Card.Title className="post-title">{post.title}</Card.Title>
                        </div>

                        <div className="post-meta">
                            <div className="post-author">
                                Author: {post.owner.name}
                                <br />
                                Created at: {new Date(post.created_at).toLocaleDateString()}
                            </div>

                            <div className="post-tags">
                                {post.tags.map((tag, index) => {
                                    const style = getRandomTagStyle();
                                    return (
                                        <span
                                            key={index}
                                            className="tag"
                                            style={{
                                                backgroundColor: style.backgroundColor,
                                                border: `1px solid ${style.borderColor}`,
                                                color: style.color,
                                                marginRight: '5px',
                                                padding: '5px 10px',
                                                borderRadius: '5px',
                                                display: 'inline-block'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="post-content">
                            <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                        </div>

                        <div className="post-footer">
                            <div
                                className="comment-count"
                                onClick={() => toggleComments(post._id)}
                            >
                                {showComments[post._id]
                                    ? 'Hide Comments'
                                    : `Comments (${comments.filter(comment => comment.post === post._id).length})`}
                            </div>
                            <Link to={`./detail/${post._id}`} className="post-readmore">
                                {`Read More =>`}
                            </Link>
                        </div>

                        <Collapse in={showComments[post._id]}>
                            <div>
                                <ul className="list-group list-group-flush mt-3">
                                    {comments
                                        .filter(comment => comment.post === post._id)
                                        .map((comment) => (
                                            <li key={comment._id} className="list-group-item">
                                                <strong>{comment.owner.name}:</strong> {comment.content}
                                            </li>
                                        ))}
                                </ul>

                            </div>
                        </Collapse>
                        {user ? (
                            <div className="mt-3">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Add a comment"
                                    className="form-control"
                                />
                                <button
                                    className="btn btn-primary mt-2"
                                    onClick={() => handleCommentSubmit(post._id)}
                                >
                                    Submit
                                </button>
                            </div>
                        ) : (
                            <div className="mt-3">
                                <button onClick={() => setShowLoginModal(true)} variant="link">
                                    Login to comment
                                </button>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            ))}

            <div className="d-flex justify-content-center mt-4">
                <Pagination
                    current={currentPage}
                    total={totalPosts}
                    pageSize={postsPerPage}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                />

                <div className="d-flex justify-content-end mb-3">
                    <label htmlFor="postsPerPageSelect" className="mr-2">Posts per page:</label>
                    <select
                        id="postsPerPageSelect"
                        value={postsPerPage}
                        onChange={handlePostsPerPageChange}
                        className="form-control"
                        style={{ width: '80px' }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
            <Login
                showLoginModal={showLoginModal}
                setShowLoginModal={setShowLoginModal}
            />
            <NewPost
                showNewPostModal={showNewPostModal}
                setShowNewPostModal={setshowNewPostModal}
            />
        </div>
    );
};

export default PostList;
