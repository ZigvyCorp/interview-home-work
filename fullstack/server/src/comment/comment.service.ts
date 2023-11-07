import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
    constructor (private prisma: PrismaService) { }

    async getAll() { }

    async getComment() { }

    async createComment() { }

    async updateComment() { }

    async deleteComment() { }
}
