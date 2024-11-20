import { Comment } from '../models/comment';
import { findAllCommentsByPostIDRepository } from '../repositories/comment.repository';
import { mapCommentResponse } from '../utils/comment.util';

export const findAllCommentsByPostIDService = async ({
    postID,
    page,
}: {
    postID: number;
    page: number;
}) => {
    try {
        const comments: Comment[] = await findAllCommentsByPostIDRepository({ page, postID });
        const commentsResponse = comments.map((comment: Comment) =>
            mapCommentResponse({ comment }),
        );

        return commentsResponse;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};
