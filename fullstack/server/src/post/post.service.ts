import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async getAll() { }

    async getPost() { }

    async createPost() { }

    async updatePost() { }

    async deletePost() { }
}
