import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: Prisma.PostCreateInput) {
    return 'This action adds a new post';
  }

  async findAll(pageIndex: number = 0) {
    const posts = await this.prisma.post.findMany({
      include: { comments: true },
      skip: pageIndex * 5,
      take: 5,
    });
    const totalRecord = await this.prisma.post.count();
    return {
      pageInfo: {
        pageNumber: pageIndex,
        totalPages: Math.ceil(totalRecord / 5),
        totalRecords: totalRecord,
        pageSize: 5,
      },
      data: posts,
    };
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
