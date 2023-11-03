import { Request, Response, NextFunction } from 'express';
import PostService from '../../services/post.service'
import responseHandler from '../../helpers/responseHandler';


const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await PostService.getPostsService(req.query);
        responseHandler(res, 200, 'Get posts successfully', posts)
    }
    catch (err) {
        next(err);
    }
}

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await PostService.getPostById(req.params.id);
        responseHandler(res, 200, 'Get post successfully', post)
    }
    catch (err) {
        next(err);
    }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await PostService.createPost(req.body);
        responseHandler(res, 201, 'Create post successfully', post)
    }
    catch (err) {
        next(err);
    }
}

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await PostService.updatePost(req.params.id, req.body);
        responseHandler(res, 201, 'Update post successfully', post)
    }
    catch (err) {
        next(err);
    }
}

export {
    getPosts,
    getPost,
    createPost,
    updatePost,
}