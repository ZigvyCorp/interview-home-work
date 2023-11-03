import { memo } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import { Comment } from '../../models/comment';

type Props = {
    commentList: Comment[];
    commentStatus: string;
};

const CommentList = memo(function CommentList({ commentList }: Props) {
    return (
        <>
            {commentList.map((comment) => (
                <CommentItem key={comment.id} commentItem={comment} />
            ))}
        </>
    );
});

export default CommentList;
