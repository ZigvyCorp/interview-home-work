import supabase from "../utils/connect-supabase";
import IComment from "../models/comment-model";
import { IResponse } from "../interfaces/response-interface";
import { StatusCodes } from "http-status-codes";



class CommentService {
    static createComment = async ({ id, post_id, name, email, body }: IComment) => {
        try {
            if (
                id == "" ||
                post_id == "" ||
                name == "" ||
                email == "" ||
                body == ""
            ) 
            {
                return {
                    type: "Error",
                    code: StatusCodes.BAD_REQUEST,
                    message: "Invalid input error",
                } as IResponse;
            }
            const { data, error } = await supabase
                .from("comments")
                .insert({
                    id, post_id, name, email, body
                })
                .select();

            if (data) {
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: data,
                } as IResponse;
            }
        } catch (err) {
            return {
                type: "Error",
                code: 400,
                message: "Create comment failed",
            } as IResponse;
        }
    };

    

    static getCommentByPostId = async (post_id: String) => {
        try {
            const { data, error } = await supabase
                .from("comments")
                .select('*')
                .eq("post_id", post_id)
    
            if (data ) {
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: data,
                } as IResponse;
            } else {
                return {
                    type: "Error",
                    code: StatusCodes.BAD_REQUEST,
                    message: "Get comment failed",
                } as IResponse;
            }
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Get comment failed",
            } as IResponse;
        }
    };

    
}

export default CommentService;
