import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
    constructor (private prisma: PrismaService) { }

    async getAll(skip: number, take: number, order: string) {
        return await this.prisma.post.findMany({
            skip: skip,
            take: take,
            orderBy: {
                updatedAt: order as Prisma.SortOrder
            },
            include: {
                comments: true
            }
        });
    }

    async getPostById(id: number) {
        return await this.prisma.post.findUnique({
            where: {
                id: id
            },
            include: {
                comments: true
            }
        });
    }

    async getPostByUser(id: number) {
        return await this.prisma.post.findMany({
            where: {
                userId: id
            }
        });
    }

    async getPostByTitle(title: string) {
        return await this.prisma.post.findFirst({
            where: {
                title: title
            }
        });
    }

    async createPost(dto: CreatePostDto) {
        return await this.prisma.post.create({
            data: {
                title: dto.title,
                content: dto.content,
                userId: dto.userId
            }
        });
    }

    async updatePost(id: number, dto: UpdatePostDto) {
        return await this.prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: dto.title,
                content: dto.content
            }
        });
    }

    async deletePost(id: number) {
        return await this.prisma.post.delete({
            where: {
                id: id
            }
        });
    }
}
