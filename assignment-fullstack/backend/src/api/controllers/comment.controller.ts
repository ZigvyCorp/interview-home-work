import { Request, Response, NextFunction } from 'express';
import CommentService from '../../services/comment.service';
import responseHandler from '../../helpers/responseHandler';


const getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const comments = await CommentService.getCommentService();
        responseHandler(res, 200, 'Get comments successfully', comments)
    }
    catch (err) {
        next(err);
    }
}

const getCommentByPostId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const comments = await CommentService.getCommentByPostId(req.params.id);
        responseHandler(res, 200, 'Get comments successfully', comments)
    }
    catch (err) {
        next(err);
    }
}

const createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const comment = await CommentService.createComment(req.body);
        responseHandler(res, 201, 'Create comment successfully', comment)
    }
    catch (err) {
        next(err);
    }
}

const updateComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const comment = await CommentService.updateComment(req.params.id, req.body)
        responseHandler(res, 201, 'Update comment successfully', comment)
    }
    catch (err) {
        next(err);
    }
}

export {
    getComments,
    getCommentByPostId,
    createComment,
    updateComment,
}