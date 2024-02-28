import { CommentService } from '../service';
import { Request, Response } from 'express';

export const getComment = async (req: Request, res: Response) => {
    try {
        const comment = await CommentService.getComment(Number(req.params.id));
        return res.status(200).json({ comment });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const createComment = async (req: Request, res: Response) => {
    try {
        const comment = await CommentService.createComment(req.body);
        return res.status(200).json({ comment });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const updateComment = async (req: Request, res: Response) => {
    try {
        const user = await CommentService.updateComment(Number(req.params.id), req.body);
        return res.status(200).json({ user });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const deleteComment = async (req: Request, res: Response) => {
    try {
        await CommentService.deleteComment(Number(req.params.id));
        return res.status(200).json({ message: 'Delete successfully' });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};
