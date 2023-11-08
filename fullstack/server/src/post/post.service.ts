import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Injectable()
export class PostService {
    constructor (private prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.post.findMany();
    }

    async getPostById(id: number) {
        return await this.prisma.post.findUnique({
            where: {
                id: id
            }
        });
    }

    async getPostByTitle(title: string) {

    }

    async createPost(dto: CreatePostDto) {

    }

    async updatePost(id: number, dto: UpdatePostDto) { }

    async deletePost(id: number) { }
}
