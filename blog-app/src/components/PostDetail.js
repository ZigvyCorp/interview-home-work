import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://172.20.10.4:3000/api/posts/detail/${id}`);
                setPost(response.data);
            } catch (err) {
                // Handle error (e.g., post not found)
                if (err.response && err.response.status === 404) {
                    navigate('/404'); // Navigate to NotFound page
                } else {
                    navigate('/404');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id, navigate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p><strong>Author:</strong> {post.owner.name}</p>
                    <p><strong>Created at:</strong> {new Date(post.created_at).toLocaleDateString()}</p>
                    <p>{post.content}</p>
                    <div>
                        <h3>Tags:</h3>
                        <div>
                            {post.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};

export default PostDetail;
