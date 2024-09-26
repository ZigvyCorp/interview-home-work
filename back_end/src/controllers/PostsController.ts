import type { Request, Response } from 'express';

import prisma from '../lib/prismadb';

class PostsController {
    //[GET] /posts?title=...
    async getAll(req: Request, res: Response) {
        let posts;
        if (req.query.title) {
            posts = await prisma.post.findMany({
                where: { title: { contains: req.query.title as string } },
            });
        } else {
            posts = await prisma.post.findMany();
            // res.writeHead(200, {
            //     'Content-Type': 'text/plain',
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            // });
        }
        res.json(posts);
    }

    //[GET] /posts/more
    async getMore(req: Request, res: Response) {
        const currentIndex = Number(req.query.current);
        const posts = await prisma.post.findMany();
        res.json(posts.slice(currentIndex, currentIndex + 5));
    }
}

export default new PostsController();
