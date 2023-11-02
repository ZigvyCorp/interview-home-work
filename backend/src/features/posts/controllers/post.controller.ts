import { Request, Response } from 'express';
import { findAllPostsService, findPostByIDService } from '../services/post.service';

// [GET] /api/v1/posts?page=:page
export const findAllPostsController = async (req: Request, res: Response) => {
    try {
        const page = req.query.page || 1;
        const postsResponse = await findAllPostsService({ page: page as number });

        return res.status(200).send({ content: postsResponse });
    } catch (error) {
        return res.status(500).send({ message: (error as Error).message });
    }
};

// [GET] /api/v1/posts/:postID
export const findPostByIDController = async (req: Request, res: Response) => {
    try {
        const { postID } = req.params;
        const postResponse = await findPostByIDService({ postID: parseInt(postID) });

        return res.status(200).send({ content: postResponse });
    } catch (error) {
        return res.status(500).send({ message: (error as Error).message });
    }
};
