import { Card, Pagination, Spin } from "antd";
import { getPosts, getPostComments } from "../api/posts.api";
import { getUsersById } from "../api/users.api";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { generateRandomDate } from "../utils/Utils";
import { Post as PostType } from '../interfaces/posts'; // Rename to avoid conflict

interface PostProps {
    searchTerm: string;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Post = ({ searchTerm, currentPage, setCurrentPage }: PostProps) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const postsPerPage: number = 8;

    useEffect(() => {
        getPosts().then((fetchedPosts) => {
            setLoading(true);
            const postsWithCommentsAndUsers = fetchedPosts.map(async (post: PostType) => {
                const [comments, user] = await Promise.all([
                    getPostComments(post.id),
                    getUsersById(post.userId)
                ]);
                return { ...post, comments, user };
            });
            Promise.all(postsWithCommentsAndUsers).then((postsWithCommentsAndUsers: PostType[]) => {
                setPosts(postsWithCommentsAndUsers);
                setLoading(false);
            });
        });
    }, []);

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            {loading ? (
                <Spin size="large" />
            ) : (
                currentPosts.map((post: PostType) => (
                    <Card key={post.id} style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2>{post.title}</h2>
                            <Link to={`/post/${post.id}`}>View full post</Link>
                        </div>
                        <h3>Created in: {generateRandomDate().toLocaleDateString()}</h3>
                        <h3>Posted by: {post.user?.name}</h3>
                        <p>{post.body.slice(0, 100)}...</p>
                        <h3>Comments: {post.comments.length}</h3>
                        <CommentSection post={post} />
                    </Card>
                ))
            )}
            <Pagination
                current={currentPage}
                total={filteredPosts.length}
                pageSize={postsPerPage}
                onChange={handlePageChange}
                style={{ marginTop: '16px', textAlign: 'center' }}
            />
        </div>
    );
};

export default Post;
