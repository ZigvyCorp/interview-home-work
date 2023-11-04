import { CreateCommentRequestDto } from "@dto/request/CreateCommentRequestDto";
import { DeleteRecordRequestDto } from "@dto/request/DeleteRecordRequestDto";
import { GetCommentByPostIdRequestDto } from "@dto/request/GetCommentRequestDto";
import { UpdateCommentRequestDto } from "@dto/request/UpdateCommentRequestDto";
import { Request, Response } from "express";
import CommentService from "src/services/CommentService";

class CommentController {
    async createComment(req: Request<{}, {}, CreateCommentRequestDto, {}>, res: Response) {
        return CommentService.createComment(req, res);
    }

    async deleteComment(req: Request<{}, {}, {}, DeleteRecordRequestDto>, res: Response) {
        return CommentService.deleteComment(req, res);
    }

    async updateComment(req: Request<{}, {}, UpdateCommentRequestDto, {}>, res: Response) {
        return CommentService.updateComment(req, res);
    }

    async getCommentsByPostId(req: Request<{}, {}, {}, GetCommentByPostIdRequestDto>, res: Response) {
        return CommentService.getCommentsByPostId(req, res);
    }
}

export default new CommentController();