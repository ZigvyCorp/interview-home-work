import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: Prisma.PostCreateInput) {
    return 'This action adds a new post';
  }

  findAll() {
    return this.prisma.post.findMany({ include: { comment: true } });
  }

  findOne(id: number) {
    return this.prisma.post.findUniqueOrThrow({ where: { id: id } });
  }

  update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
