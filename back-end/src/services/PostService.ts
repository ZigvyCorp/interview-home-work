import { PaginationRequest } from "@dto/request/PaginationRequestDto";
import HttpResponse from "@handler/HttpResponse";
import { getPageResponse, getSkipAndTake } from "@utils/PaginationUtil";
import { Request, Response } from "express";
import { PostModel } from "src/models";
import { getRepository } from "typeorm";

export class PostService {
    async getAllPosts(req: Request<{}, {}, {}, PaginationRequest>, res: Response) {
        try {
            const { page, pageSize } = req.query;
            if (!page || !pageSize) {
                return HttpResponse.error(res, 'Query params cannot be null', 400);
            }

            const repository = getRepository(PostModel);
            if (page <= 0) {
                const [posts, count] = await repository.findAndCount();
                const paginationResponse = getPageResponse({ page, pageSize }, count, posts)
                return HttpResponse.success(res, paginationResponse, 200);
            }

            const { take, skip } = getSkipAndTake(page, pageSize);
            const [posts, count] = await repository.findAndCount({ take, skip });
            const paginationResponse = getPageResponse({ page, pageSize }, count, posts)
            return HttpResponse.success(res, paginationResponse, 200);
        } catch (err) {
            console.log("ERROR_GET_ALL_POSTS", err);
            return HttpResponse.error(res, 'Get all post error', 400);
        }
    }
}

export default new PostService();