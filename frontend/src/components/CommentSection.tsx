import { useState } from "react";
import { Post } from "../interfaces/posts";

interface Comment {
    id: number;
    name: string;
    body: string;
}

interface CommentSectionProps {
    post: Post;
}

const CommentSection: React.FC<CommentSectionProps> = ({ post }) => {
    const [visibleComments, setVisibleComments] = useState<number | null>(null);

    const toggleComments = (postId: number) => {
        setVisibleComments(visibleComments === postId ? null : postId);
    };

    return (
        <div>
            <a onClick={() => toggleComments(post.id)}>
                {visibleComments === post.id ? 'Hide Comments' : 'Show Comments'}
            </a>
            {visibleComments === post.id && (
                <div>
                    <h3>Comments:</h3>
                    {post.comments.map((comment: Comment) => (
                        <div key={comment.id} style={{ marginBottom: '8px' }}>
                            <p><strong>{comment.name}</strong>: {comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentSection;
