import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';

@Injectable()
export class CommentService {
    constructor (private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.comment.findMany();
    }

    async getComment(id: number) {
        return await this.prisma.comment.findUnique({
            where: {
                id: id
            }
        });
    }

    async createComment(dto: CreateCommentDto) { }

    async updateComment(id: number, dto: UpdateCommentDto) { }

    async deleteComment(id: number) {
        return await this.prisma.comment.delete({
            where: {
                id: id
            }
        });
    }
}
