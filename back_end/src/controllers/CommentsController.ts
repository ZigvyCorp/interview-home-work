import type { Request, Response } from 'express';

import prisma from '../lib/prismadb';

class CommentsController {
    //[GET] /comments?title=...
    async getAll(req: Request, res: Response) {
        let comments;
        if (req.query.postId) {
            comments = await prisma.comment.findMany({
                where: { post: { equals: req.query.postId as string } },
            });
        } else {
            comments = await prisma.comment.findMany();
        }
        res.json(comments);
    }
}

export default new CommentsController();
