import { CreateCommentRequestDto } from "@dto/request/CreateCommentRequestDto";
import { Request, Response } from "express";
import { BaseService } from "./BaseService";
import { CommentModel, PostModel } from "src/models";
import { UserModel } from "src/models/UserModel";
import HttpResponse from "@handler/HttpResponse";
import { DeleteRecordRequestDto } from "@dto/request/DeleteRecordRequestDto";
import { getRepository } from "typeorm";
import { UpdateCommentRequestDto } from "@dto/request/UpdateCommentRequestDto";
import { GetCommentByPostIdRequestDto } from "@dto/request/GetCommentRequestDto";
import { getPageResponse, getSkipAndTake } from "@utils/PaginationUtil";
import { multipleCommentMapper } from "src/mapper/CommentResponseMapper";

export class CommentService extends BaseService {
    async createComment(req: Request<{}, {}, CreateCommentRequestDto, {}>, res: Response) {
        try {
            const { content, postId, ownerId } = req.body;
            const post = new PostModel();
            const owner = new UserModel();

            post.id = postId;
            owner.id = ownerId;

            const newComment = await this.createAndSave({ content, owner, post }, CommentModel);
            return HttpResponse.success(res, newComment, 200);
        }
        catch (error) {
            console.log("CREATE_NEW_COMMENT_ERROR", error);
            return HttpResponse.error(res, (error as Error).message, 400);
        }
    }

    async deleteComment(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        try {
            const { id, soft } = req.query;
            await this.deleteOneRecord(CommentModel, { id }, soft);
            return HttpResponse.success(res, { message: `Delete comment with id ${id} successful` }, 200);
        }
        catch (err) {
            console.log("DELETE_COMMENT_ERROR", err);
            return HttpResponse.error(res, (err as Error).message, 400);
        }
    }

    async updateComment(req: Request<{}, {}, UpdateCommentRequestDto, {}>, res: Response) {
        const { id } = req.body;
        try {
            const repository = getRepository(CommentModel);
            const comment = await repository.findOne(id);

            if (!comment) {
                return HttpResponse.error(res, 'Comment not found', 400);
            }

            await this.handleUpdateComment(comment, req.body);
            const commentSaved = repository.save(comment);

            return HttpResponse.success(res, commentSaved, 200);
        } catch (error) {
            console.log("UPDATE_COMMENT_ERROR", error);
            return HttpResponse.error(res, `Error when update user with id ${id}`, 400);
        }
    }

    async getCommentsByPostId(req: Request<{}, {}, {}, GetCommentByPostIdRequestDto>, res: Response) {
        const { postId, page, pageSize } = req.query;
        const repository = getRepository(CommentModel);
        const { take, skip } = getSkipAndTake(page, pageSize);

        try {

            const [comments, total] = await repository
                .createQueryBuilder('comment')
                .select(['comment.id', 'comment.content', 'comment.createdAt'])
                .addSelect(['user.name'])
                .addSelect(['post.id'])
                .innerJoin('comment.owner', 'user')
                .innerJoin('comment.post', 'post')
                .take(take)
                .skip(skip)
                .where('comment.post = :postId', { postId })
                .getManyAndCount();

            const commentResponse = multipleCommentMapper(comments);
            const pageResponse = getPageResponse({ page, pageSize }, total, commentResponse);

            return HttpResponse.success(res, pageResponse, 200);
        } catch (error) {
            console.log("GET_COMMENT_BY_POST_ID_ERROR", error);
            return HttpResponse.error(res, `Error when get comment by postId ${postId}`, 400);
        }
    }

    async handleUpdateComment(comment: CommentModel, request: UpdateCommentRequestDto) {
        const { content } = request;
        if (!content && content.length > 0) {
            comment.content = content;
        }
    }
}

export default new CommentService();