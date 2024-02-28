import { UserService } from '../service';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getUsers(Number(req.query.page));
        return res.status(200).json({ users });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUser(Number(req.params.id));
        return res.status(200).json({ user });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.createUser(req.body);
        return res.status(200).json({ user });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.updateUser(Number(req.params.id), req.body);
        return res.status(200).json({ user });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        await UserService.deleteUser(Number(req.params.id));
        return res.status(200).json({ message: 'Delete successfully' });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};
