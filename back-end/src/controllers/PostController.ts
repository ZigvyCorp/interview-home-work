import { CreatePostRequestDto } from '@dto/request/CreatePostRequestDto';
import { DeleteRecordRequestDto } from '@dto/request/DeleteRecordRequestDto';
import { GetPostRequestDto } from '@dto/request/GetPostRequestDto';
import { GetRecordByIdRequestDto } from '@dto/request/GetRecordByIdRequestDto';
import { PaginationRequestDto } from '@dto/request/PaginationRequestDto';
import { UpdatePostRequestDto } from '@dto/request/UpdatePostRequestDto';
import { Request, Response } from 'express';
import PostService from 'src/services/PostService';

class PostController {
    async getAllPost(req: Request<{}, {}, {}, GetPostRequestDto>, res: Response) {
        return PostService.getAllPosts(req, res);
    }

    async createPost(req: Request<{}, {}, CreatePostRequestDto, {}>, res: Response) {
        return PostService.createPost(req, res);
    }

    async updatePost(req: Request<{}, {}, UpdatePostRequestDto, {}>, res: Response) {
        return PostService.updatePost(req, res);
    }

    async deletePost(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        return PostService.deletePost(req, res);
    }

    getPostById(req: Request<GetRecordByIdRequestDto, {}, {}, {}>, res: Response) {
        return PostService.getPostById(req, res);
    }
}

export default new PostController();