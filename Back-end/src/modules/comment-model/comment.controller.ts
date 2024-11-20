import { Request, Response } from "express";
import { DATA_TYPE, getDataRequest } from "../../middlewares/getData.middleware";
import { CommentService } from "./comment.service";
import { IBlogCommentCreate } from "./comment.model";
import { BlogModel } from "../blog-module/blog.model";

export async function commentBlog(req: Request, res: Response) {
    try {
        const body = getDataRequest(req, DATA_TYPE.BODY) as IBlogCommentCreate
        const comment = await CommentService.commentBlog(body);
        
        const update = await BlogModel.findByIdAndUpdate(body.blog, { $push: { comment: comment?.id } })
        return res.status(200).send(comment).end();
    } catch (err) {
        console.log({ findBlog: err });
        return res.status(400).send(err).end();
    }
}

export async function getBlogCommentsById(req: Request, res: Response) {
    try {
        const blogId = req.params.id;
        const comments = await CommentService.getBlogComments(blogId);
        return res.status(200).send(comments).end();
    } catch (err) {
        console.log({ getBlogCommentsById: err });
        return res.status(400).send(err).end();
    }
}