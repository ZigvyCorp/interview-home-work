import { PostService } from '../service';
import { Request, Response } from 'express';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await PostService.getPosts(
            Number(req.query.page),
            req.query.keyword as string,
            Number(req.query.ownerId)
        );
        return res.status(200).json({ posts });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        const post = await PostService.getPost(Number(req.params.id));
        return res.status(200).json({ post });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        const post = await PostService.createPost(req.body);
        return res.status(200).json({ post });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await PostService.updatePost(Number(req.params.id), req.body);
        return res.status(200).json({ post });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        await PostService.deletePost(Number(req.params.id));
        return res.status(200).json({ message: 'Delete successfully' });
    } catch (error: any) {
        if (error.name || error.message) return res.status(400).json({ error });
        return res.status(500).json({ message: 'Error from server' });
    }
};
