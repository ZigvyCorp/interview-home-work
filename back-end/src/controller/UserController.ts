import { UserService } from '../service';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getUsers(Number(req.query.page));
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: 'Error from server' });
    }
};
