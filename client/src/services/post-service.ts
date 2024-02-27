import supabase from "../utils/connect-supabase";
import IPost from "../models/post-model";
import { IResponse } from "../interfaces/response-interface";
import { StatusCodes } from "http-status-codes";

class PostService {
    static getAllPost = async () => {
        try {
            let { data: listPostId } = await supabase
                .from("posts")
                .select(`id`);

            const posts =  await Promise.all(
                listPostId.map( async (post_id: IPost)=>{
                    const id = post_id?.id || '';
                    const post = await this.getPostByPostId(id)
                    return post.message
                })
            )

            return {
                code: StatusCodes.OK,
                type: "Success",
                message: posts,
            } as IResponse;
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Get all posts failed",
            } as IResponse;
        }
    };

    static createPost = async ({ id, user_id, title, body }: IPost) => {
        try {
            if (
                id == "" ||
                user_id == "" ||
                title == "" ||
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
                .from("posts")
                .insert({
                    id,
                    user_id,
                    title,
                    body,
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
                message: "Create post failed",
            } as IResponse;
        }
    };

  

    static getPostByPostId = async (post_id: string) => {
        try {
            const { data, error } = await supabase
                .from("posts")
                .select(`*, author: user_id(name, username)`)
                .eq("id", post_id)
                .single();

            const {data: comments} = await supabase
            .from("comments")
            .select()
            .eq('post_id', post_id)

            if (data ) {
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: {
                        ...data,
                        comments
                    },
                } as IResponse;
            } else {
                return {
                    type: "Error",
                    code: StatusCodes.BAD_REQUEST,
                    message: "Get a post failed",
                } as IResponse;
            }
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Get a post failed",
            } as IResponse;
        }
    };

    static updatePost = async () => {
        throw new Error("Method not implemented.");
    };

    static deletePost = async (post_id: String) => {
        try {
            const { error } = await supabase
                .from("posts")
                .delete()
                .eq("id", post_id);

            if (!error)
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: "Delete post successfully",
                } as IResponse;
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Delete a post failed",
            } as IResponse;
        }
    };
}

export default PostService;
