import { PaginationRequest } from '@dto/request/PaginationRequestDto';
import HttpResponse from '@handler/HttpResponse';
import { getPageResponse, getSkipAndTake } from '@utils/PaginationUtil';
import { Request, Response } from 'express';
import { PostModel } from 'src/models';
import PostService from 'src/services/PostService';
import { getRepository } from 'typeorm';

class PostController {
    async getAllPost(req:  Request<{}, {}, {}, PaginationRequest>, res: Response) {
        return PostService.getAllPosts(req, res);
    }
}

export default new PostController();