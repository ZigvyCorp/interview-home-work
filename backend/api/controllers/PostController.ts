import { Request, Response } from "express";
import { StatusCodeEnums } from "../common/enums/StatusCodeEnums";
import PostService from "../services/PostService";

export default class PostController {
    private postService: PostService = new PostService();

    getPosts = async (req: Request<any, any, any>, res: Response): Promise<any> => {
        try {
            const page: number = parseInt(req.query.page as string)  || 1
            const pagesize: number = parseInt(req.query.pagesize as string) || 10
            const result: any = await this.postService.getPosts(page, pagesize)
            return res.status(result.statusCode || StatusCodeEnums.OK_200).json(result)
        }
        catch (error: any) {
            return res.status(StatusCodeEnums.InternalServerError_500).json({ error: error.messgae });
        }
    }
}