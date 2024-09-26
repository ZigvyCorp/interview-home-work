import { Card } from 'antd';

import type { Post } from '../features/posts/postsSlice';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectUserById } from '../features/users/usersSlice';
import CommentSection from './CommentSection';

const Blog = ({ post }: { post: Post }) => {
    const user = useAppSelector((state) => selectUserById(state, post.owner));
    return (
        <Card className="mt-10 dark:bg-neutral-900 dark:text-neutral-200 border-0">
            <h1 className="text-center capitalize text-2xl">{post.title}</h1>
            <p className="font-bold">
                Author:
                <span className="font-normal text-base"> {user.username}</span>
            </p>
            <p className="font-bold">
                Create at:
                <span className="font-normal text-base ml-1">
                    {new Date(post.created_at).toLocaleDateString('en-GB')}
                </span>
            </p>
            <Link to={`blog/${post.id}`}>
                <p className="text-lg mt-4">{post.content.slice(0, 200)}...</p>
            </Link>
            <CommentSection postId={post.id} />
        </Card>
    );
};

export default Blog;
