import { Request, Response } from 'express';
import { findAllCommentsByPostIDService } from '../services/comment.service';

// [GET] /api/v1/comments?postID=:postID&page=:page
export const findAllCommentsByPostIDController = async (req: Request, res: Response) => {
    try {
        const { page, postID } = req.query;
        const commentsResponse = await findAllCommentsByPostIDService({
            page: parseInt(page as string),
            postID: parseInt(postID as string),
        });

        return res.status(200).send({ content: commentsResponse });
    } catch (error) {
        return res.status(500).send({ message: (error as Error).message });
    }
};
