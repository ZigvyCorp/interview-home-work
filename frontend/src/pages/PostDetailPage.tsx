import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateRandomDate } from "../utils/Utils";
import CommentSection from "../components/CommentSection";
import { getPostById, getPostComments } from '../api/posts.api';
import { getUsersById } from "../api/users.api";
import { Post } from '../interfaces/posts';
import { Card } from "antd";

function PostDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const fetchedPost = await getPostById(Number(id));
                const [comments, user] = await Promise.all([
                    getPostComments(fetchedPost.id),
                    getUsersById(fetchedPost.userId)
                ]);
                setPost({ ...fetchedPost, comments, user });
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <Card>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>Author: {post.user?.name}</h3>
            <h3>Created: {generateRandomDate().toLocaleDateString()}</h3>
            <CommentSection post={post} />
        </Card>
    );
}

export default PostDetailPage;
