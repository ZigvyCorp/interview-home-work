import type { Request, Response } from 'express';
import prisma from '../lib/prismadb';

class UserController {
    //[GET] /users?id=...
    async getAll(req: Request, res: Response) {
        if (req.query.id) {
            const user = await prisma.user.findMany({
                where: { id: { equals: req.query.id as string } },
            });
            res.json(user);
        } else {
            const users = await prisma.user.findMany();
            res.json(users);
        }
    }
}

export default new UserController();
