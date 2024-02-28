import {Request,Response, NextFunction } from "express";
import PostService from "../services/post-service";
import { StatusCodes } from "http-status-codes";




class PostController {

    static getAllPost = async (req: Request, res: Response, next: NextFunction)=> {
        try{
            const response = await PostService.getAllPost();
            res.status(StatusCodes.OK).json(response);
        }
        catch(err){
            next(err);
        }
    }

    static getAllPostByPage = async (req: Request, res: Response, next: NextFunction)=> {
        try{
            const {page} = req.params;
            const response = await PostService.getAllPostByPage(page);
            res.status(StatusCodes.OK).json(response);
        }
        catch(err){
            next(err);
        }
    }

    static createPost = async (req: Request, res: Response, next: NextFunction) =>{

        try{
            let {user_id, id, title, body} = req.body;
            const response = await PostService.createPost({id, user_id, title, body})

            res.status(200).json(response)
        }
        catch(err){
            next(err);
        }
        
    }

    static getPostByPostId = async (req: Request, res: Response, next: NextFunction) =>{
        try{
            const {post_id} = req.params;
            const response = await PostService.getPostByPostId(post_id);
            res.status(StatusCodes.OK).json(response);
        }
        catch(err){
            next(err)
        }
    }



    static updatePost = async (req: Request, res: Response, next: NextFunction) =>{
        try{
            const {post_id} = req.params;
            let { title, body} = req.body;
            const response = await PostService.updatePost(post_id, title, body);
            res.status(StatusCodes.OK).json(response);
        }
        catch(err){

        }
    }

    static deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const {post_id} = req.params;
            const response = await PostService.deletePost(post_id);
            res.status(StatusCodes.OK).json(response);
        }
        catch(err){
            next(err)
        }
    }

    
   

}


export default PostController;