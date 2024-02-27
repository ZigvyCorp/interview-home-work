import { PostService } from '../service';
import { Request, Response } from 'express';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await PostService.getPosts(Number(req.query.page));
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).json({ message: 'Error from server' });
    }
};
