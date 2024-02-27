import {Request,Response, NextFunction } from "express";
import CommentService from "../services/comment-service";




class CommentController {
    
    static createComment = async (req: Request, res: Response, next: NextFunction) => {
        try{
            let {id, post_id, name, email, body} = req.body;
            const response = await CommentService.createComment({id, post_id, name, email, body})
            res.status(200).json(response)
        }
        catch(err){
            next(err);
        }
    }
}

export default CommentController;