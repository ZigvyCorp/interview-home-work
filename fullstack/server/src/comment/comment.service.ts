import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';

@Injectable()
export class CommentService {
    constructor (private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.comment.findMany();
    }

    async getCommentById(id: number) {
        return await this.prisma.comment.findUnique({
            where: {
                id: id
            }
        });
    }

    async getCommentByPost(id: number) {
        return await this.prisma.comment.findMany({
            where: {
                postId: id
            }
        });
    }

    async createComment(dto: CreateCommentDto) {
        return await this.prisma.comment.create({
            data: {
                content: dto.content,
                userId: dto.userId,
                postId: dto.postId
            }
        });
    }

    async updateComment(id: number, dto: UpdateCommentDto) {
        return await this.prisma.comment.update({
            where: {
                id: id
            },
            data: {
                content: dto.content
            }
        });
    }

    async deleteComment(id: number) {
        return await this.prisma.comment.delete({
            where: {
                id: id
            }
        });
    }
}
