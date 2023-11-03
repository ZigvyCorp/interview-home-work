import { CreatePostRequestDto } from "@dto/request/CreatePostRequestDto";
import { DeleteRecordRequestDto } from "@dto/request/DeleteRecordRequestDto";
import { GetRecordByIdRequestDto } from "@dto/request/GetRecordByIdRequestDto";
import { PaginationRequestDto } from "@dto/request/PaginationRequestDto";
import { UpdatePostRequestDto } from "@dto/request/UpdatePostRequestDto";
import HttpResponse from "@handler/HttpResponse";
import { getPageResponse, getSkipAndTake } from "@utils/PaginationUtil";
import { Request, Response } from "express";
import { multiplePostPaginationMapper, singlePostMapper } from "src/mapper/PostResponseMapper";
import { CommentModel, PostModel } from "src/models";
import { UserModel } from "src/models/UserModel";
import { Repository, getRepository } from "typeorm";
import { BaseService } from "./BaseService";

export class PostService extends BaseService {
    async getAllPosts(req: Request<{}, {}, {}, PaginationRequestDto>, res: Response) {
        try {
            const { page, pageSize } = req.query;
            const { take, skip } = getSkipAndTake(page, pageSize);

            const postRepository = getRepository(PostModel);
            const [posts, total] = await postRepository
                .createQueryBuilder('post')
                .select(['post.id', 'post.title', 'post.content', 'post.createdAt', 'post.tags'])
                .addSelect(['comment.id'])
                .addSelect(['user.name'])
                .leftJoin('post.comments', 'comment')
                .leftJoin('post.owner', 'user')
                .take(take)
                .skip(skip)
                .getManyAndCount();
            const postResponse = multiplePostPaginationMapper(posts);
            const pageResponse = getPageResponse({ page, pageSize }, total, postResponse)
            return HttpResponse.success(res, pageResponse, 200);
        } catch (err) {
            console.log("ERROR_GET_ALL_POSTS", err);
            return HttpResponse.error(res, 'Get all post error', 400);
        }
    }

    async createPost(req: Request<{}, {}, CreatePostRequestDto, {}>, res: Response) {
        try {
            const { title, content, ownerId, tags } = req.body;
            const ownerRepository = getRepository(UserModel);
            const owner = await ownerRepository.findOne({ id: ownerId });
            if (!owner) {
                return HttpResponse.error(res, 'Owner not found', 400);
            }
            const newPost = await this.createAndSave({ title, content, owner, tags }, PostModel);
            return HttpResponse.success(res, newPost, 200);
        }
        catch (err) {
            console.log("CREATE_NEW_POST_ERROR", err);
            return HttpResponse.error(res, (err as Error).message, 400);
        }
    }

    async updatePost(req: Request<{}, {}, UpdatePostRequestDto, {}>, res: Response) {
        try {
            const { id, ownerId } = req.body;

            const postRepository = getRepository(PostModel);
            const ownerRepository = getRepository(UserModel);

            const post = await postRepository.findOne(id);
            if (!post) {
                return HttpResponse.error(res, 'Post not found', 400);
            }
            const owner = await ownerRepository.findOne({ id: ownerId });
            if (!owner) {
                return HttpResponse.error(res, 'Owner not found', 400);
            }
            await this.handleUpdatePost(post, ownerRepository, req.body, res);
            const postUpdated = postRepository.save(post);

            return HttpResponse.success(res, postUpdated, 200);
        }
        catch (err) {
            console.log("UPDATE_POST_ERROR", err);
            return HttpResponse.error(res, (err as Error).message, 400);
        }
    }

    async deletePost(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        try {
            const { id, soft } = req.query;
            await this.deleteOneRecord(PostModel, { id }, soft);
            return HttpResponse.success(res, { message: `Delete post with id ${id} successful` }, 200);
        }
        catch (err) {
            console.log("DELETE_POST_ERROR", err);
            return HttpResponse.error(res, (err as Error).message, 400);
        }
    }

    async getPostById(req: Request<GetRecordByIdRequestDto, {}, {}, {}>, res: Response) {
        try {
            const { id } = req.params;
            const postRepository = getRepository(PostModel);
            const commentRepository = getRepository(CommentModel);

            const post = await postRepository
                .createQueryBuilder('post')
                .select(['post.id', 'post.title', 'post.content', 'post.createdAt', 'post.tags'])
                .addSelect(['user.name'])
                .innerJoin('post.owner', 'user')
                .where("post.id = :id", { id })
                .getOne();
            if (!post) {
                return HttpResponse.error(res, 'Post not found', 400);
            }

            const comments = await commentRepository
                .createQueryBuilder('comment')
                .select(['comment.id', 'comment.content', 'comment.createdAt'])
                .addSelect(['user.name'])
                .innerJoin('comment.owner', 'user')
                .where("post = :id", { id })
                .getMany();

            const postResponse = singlePostMapper(post, comments);

            return HttpResponse.success(res, postResponse, 200);
        } catch (err) {
            console.log("GET_POST_ERROR", err);
            return HttpResponse.error(res, (err as Error).message, 400);
        }
    }

    async handleUpdatePost(
        post: PostModel,
        ownerRepository: Repository<UserModel>,
        request: UpdatePostRequestDto,
        res: Response) {
        const { title, content, ownerId, tags } = request;

        if (title) {
            post.title = title;
        }
        if (content) {
            post.content = content;
        }
        if (ownerId) {
            const owner = await ownerRepository.findOne({ id: ownerId });
            if (!owner) {
                return HttpResponse.error(res, 'Owner not found', 400);
            }
            post.owner = owner;
        }
        if (tags) {
            post.tags = tags;
        }
    }
}

export default new PostService();